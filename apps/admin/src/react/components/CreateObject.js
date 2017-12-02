
import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import { Link } from 'react-router-dom';

import { BannerAlert } from '../../../../../site/src/react/components/tailwinds/Alerts';
import { IconButton } from '../../../../../site/src/react/components/tailwinds/Buttons';

import AdminService from '../lib/AdminService';

class CreateObject extends Component {

  constructor(props) {

    super(props);

    this.handleCreate = this.handleCreate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.state = {
      model: props.match.params.modelName,
      hasSuccess: false,
      hasFailure: false,
      obj: null
    }
  }

  async componentDidMount() {
    var template = await AdminService.getModelTemplate(this.state.model);
    this.setState({
      obj: template
    });
  }
  async componentWillReceiveProps(props) {
    if (props.match.params.modelName != this.props.modelName) {
      var modelName = props.match.params.modelName;
      var template = await AdminService.getModelTemplate(modelName);
      this.setState({
        model: modelName,
        obj: template
      });
    }
  }

  async handleCreate() {
    try {
      var res = AdminService.createObject(this.state.model, this.state.obj);
      this.setState({
        hasSuccess: true,
        hasFailure: false
      });
    }
    catch (err) {
      this.setState({
        hasSuccess: false,
        hasFailure: true
      });
    }
  }
  handleChange(v) {
    this.state.obj = JSON.parse(v);
  }
  handleCancel() {
    window.location.hash = `#/model/${this.state.model}`;
  }

  render() {

    let links = '';
    let obj = '';
    let msg = '';

    if (this.state.obj) {
      links = (
        <div className="my-4 text-center">
          <IconButton color="text1" faIcon="check" text="CREATE" textColor="header-text" onClick={this.handleCreate} />
          <span>&nbsp;</span>
          <IconButton color="header-bg" faIcon="reply" text="Cancel" textColor="header-text" onClick={this.handleCancel} />
        </div>
      );
      obj = <CodeMirror value={JSON.stringify(this.state.obj, null, '  ')} onChange={this.handleChange} options={{lineNumbers: true, mode:{name:'javascript', json: true}}} />;
    }
    if (this.state.hasSuccess) {
      msg = <BannerAlert alert="Yay! " color="border" message="The object was successfully created." />
    }
    if (this.state.hasFailure) {
      msg = <BannerAlert alert="Oh No! " color="red" message="There was an error creating the object." />
    }

    return (
      <div className="pt-6 px-4 text-text1">

        <h1>{this.state.model}</h1>

        {msg}
        {links}
        {obj}
      </div>
    );
  }
}

export default CreateObject;
