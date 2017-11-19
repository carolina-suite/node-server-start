
import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import { Link } from 'react-router-dom';

import { BannerAlert } from '../../../../../site/src/react/components/tailwinds/Alerts';
import { IconButton } from '../../../../../site/src/react/components/tailwinds/Buttons';

import AdminService from '../lib/AdminService';

class UpdateObject extends Component {

  constructor(props) {

    super(props);

    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      hasSuccess: false,
      hasFailure: false,
      id: props.match.params.objectId,
      model: props.match.params.modelName,
      obj: { schema: {} }
    };
  }

  async componentDidMount() {
    var data = await AdminService.getObject(this.state.model, this.state.id);
    this.setState({ obj: data });
  }
  async componentWillReceiveProps(props) {
    if (props.match.params.objectId != this.state.id) {

      var modelName = props.match.params.modelName;
      var objectId = props.match.params.objectId;
      var data = await AdminService.getObject(modelName, objectId);

      this.setState({
        id: objectId,
        model: modelName,
        obj: data
      });
    }
  }

  handleChange(v) {
    this.state.obj.obj = JSON.parse(v);
  }
  async handleUpdate() {
    var res = await AdminService.updateObject(this.state.model, this.state.id, this.state.obj.obj);
    if (res.hasOwnProperty('nModified') && res.nModified == 1) {
      this.setState({
        hasSuccess: true,
        hasFailure: false
      });
    }
    else {
      this.setState({
        hasSuccess: false,
        hasFailure: true
      });
    }
  }
  handleCancel() {
    window.location.hash = `#/view/${this.state.model}/${this.state.id}`;
  }
  handleDelete() {
    window.location.hash = `#/delete/${this.state.model}/${this.state.id}`;
  }

  render() {

    let links = '';
    let obj = '';
    let msg = '';

    if (this.state.obj.obj) {
      links = (
        <div className="my-4 text-center">
          <IconButton color="text1" faIcon="check" text="UPDATE" textColor="header-text" onClick={this.handleUpdate} />
          <span>&nbsp;</span>
          <IconButton color="header-bg" faIcon="reply" text="Cancel" textColor="header-text" onClick={this.handleCancel} />
          <span>&nbsp;</span>
          <IconButton color="text2" faIcon="times" text="Delete" textColor="white" onClick={this.handleDelete} />
        </div>
      );
      obj = <CodeMirror value={JSON.stringify(this.state.obj.obj, null, '  ')} onChange={this.handleChange} options={{lineNumbers: true, mode:{name:'javascript', json: true}}} />;
    }
    if (this.state.hasSuccess) {
      msg = <BannerAlert alert="Yay! " color="border" message="The object was successfully updated." />
    }
    if (this.state.hasFailure) {
      msg = <BannerAlert alert="Oh No! " color="red" message="There was an error updating the object." />
    }

    return (
      <div className="pt-6 px-4 text-text1">

        <h1>{this.state.model}: {this.state.id}</h1>

        {msg}
        {links}
        {obj}
      </div>
    );
  }
}

export default UpdateObject;
