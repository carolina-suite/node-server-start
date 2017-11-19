
import { Component } from 'react';

import AdminService from '../lib/AdminService';

class CreateObject extends Component {

  constructor(props) {

    super(props);

    this.handleCreate = this.handleCreate.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.state = {
      hasSuccess: false,
      hasFailure: false,
      obj: null
    }

    componentDidMount() {
      var template = await AdminService.getModelTemplate(this.props.modelName);
      this.setState({
        obj: template
      });
    }
    componentWillReceiveProps(props) {
      if (props.match.params.modelName != this.props.modelName)
      var template = await AdminService.getModelTemplate(this.props.modelName);
    }

    async handleCreate() {
      
    }
  }
}
