
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AdminService from '../lib/AdminService';

class Model extends Component {

  constructor(props) {

    super(props);

    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.state = {
      modelName: props.match.params.modelName,
      objects: [],
      page: 1
    }
  }

  async componentDidMount() {
    var data = await AdminService.getObjects(this.state.modelName, this.state.page);
    this.setState({ objects: data });
  }
  async componentWillReceiveProps(props) {
    if (props.match.params.modelName != this.state.modelName) {
      var modelName = props.match.params.modelName;
      this.setState({
        modelName: modelName,
        page: 1
      });
      var data = await AdminService.getObjects(modelName, 1);
      this.setState({ objects: data });
    }
  }

  async previousPage(e) {

    e.preventDefault();

    var nextPage = this.state.page - 1;
    var data = await AdminService.getObjects(this.state.modelName, nextPage);
    this.setState({
      objects: data,
      page: nextPage
    });
  }
  async nextPage(e) {

    e.preventDefault();

    var nextPage = this.state.page + 1;
    var data = await AdminService.getObjects(this.state.modelName, nextPage);
    this.setState({
      objects: data,
      page: nextPage
    });
  }

  render() {
    return(
      <div className="pt-6 pl-4 text-text1">

        <h1>Model: {this.state.modelName}</h1>

        <div className="flex flex-wrap">

        <div class="p-4 w-1/4">
          <div class="bg-text1 border-b-4 border-border p-4 pin rounded text-header-text">

            <h4 className="mb-6">New Object</h4>

            <Link className="bg-header-bg border border-border m-2 no-underline rounded-lg px-4 py-2 text-header-text" to={'/create/' + this.state.modelName}>Create</Link>
          </div>
        </div>

          <div className="p-4 w-1/4">
            <div class="bg-text1 border-b-4 border-border p-4 pin rounded text-header-text">

              <h4 className="mb-6">PREVIOUS PAGE</h4>

              <a className="bg-header-bg border border-border m-2 no-underline rounded-lg px-4 py-2 text-header-text" href="#" onClick={this.previousPage}>{"Go To Page " + (this.state.page -1)}</a>
            </div>
          </div>

          {this.state.objects.map((obj, i) =>
            <div class="p-4 w-1/4">
              <div class="bg-background border-b-4 border-border p-4 pin rounded text-header-text">

                <h4 className="mb-6">{obj.display}</h4>

                <Link className="bg-header-bg border border-border m-2 no-underline rounded-lg px-4 py-2 text-header-text" to={'/view/' + this.state.modelName + '/' + obj.id}>View</Link>
                <Link className="bg-text1 border border-border m-2 no-underline rounded-lg px-4 py-2 text-header-text" to={'/edit/' + this.state.modelName + '/' + obj.id}>Edit</Link>
                <Link className="bg-text2 border border-border m-2 no-underline rounded-lg px-4 py-2 text-white" to={'/delete/' + this.state.modelName + '/' + obj.id}>Delete</Link>
              </div>
            </div>
          )}

          <div class="p-4 w-1/4">
            <div class="bg-text1 border-b-4 border-border p-4 pin rounded text-header-text">

              <h4 className="mb-6">NEXT PAGE</h4>

              <a className="bg-header-bg border border-border m-2 no-underline rounded-lg px-4 py-2 text-header-text" href="#" onClick={this.nextPage}>{"Go To Page " + (this.state.page + 1)}</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Model;
