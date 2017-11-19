
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { IconButton } from '../../../../../site/src/react/components/tailwinds/Buttons';

import AdminService from '../lib/AdminService';

class DeleteObject extends Component {

  constructor(props) {

    super(props);

    this.handleCancel = this.handleCancel.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      id: props.match.params.objectId,
      model: props.match.params.modelName
    };
  }

  async componentWillReceiveProps(props) {
    if (props.match.params.objectId != this.state.id) {

      var modelName = props.match.params.modelName;
      var objectId = props.match.params.objectId;

      this.setState({
        id: objectId,
        model: modelName
      });
    }
  }

  handleCancel() {
    window.location.hash = `#/view/${this.state.model}/${this.state.id}`;
  }
  async handleDelete() {
    var res = await AdminService.deleteObject(this.state.model, this.state.id);
    window.location.hash = `#/model/${this.state.model}`
  }

  render() {
    return (
      <div className="pt-6 pl-4 text-text1">

        <h1>Delete {this.state.model}: {this.state.id}?</h1>

        <div className="my-4 text-center">
          <IconButton color="header-bg" faIcon="reply" text="No, Cancel" textColor="header-text" onClick={this.handleCancel} />
          <span>&nbsp;</span>
          <IconButton color="text2" faIcon="times" text="Yes, Delete" textColor="white" onClick={this.handleDelete} />
        </div>
      </div>
    )
  }
}

export default DeleteObject;
