
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { IconButton } from '../../../../../site/src/react/components/tailwinds/Buttons';

import AdminService from '../lib/AdminService';

class ViewObject extends Component {

  constructor(props) {

    super(props);

    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
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

  handleEdit() {
    window.location.hash = `#/edit/${this.state.model}/${this.state.id}`;
  }
  handleDelete() {
    window.location.hash = `#/delete/${this.state.model}/${this.state.id}`;
  }

  render() {

    let links = '';

    if (this.state.obj.obj) {
      links = (
        <div className="my-4 text-center">
          <IconButton color="text1" faIcon="edit" text="Edit" textColor="header-text" onClick={this.handleEdit} />
          <span>&nbsp;</span>
          <IconButton color="text2" faIcon="times" text="Delete" textColor="white" onClick={this.handleDelete} />
        </div>
      );
    }

    return (
      <div className="pt-6 pl-4 text-text1">

        <h1>{this.state.model}: {this.state.id}</h1>

        {links}
        {Object.getOwnPropertyNames(this.state.obj.schema).map((n, i) => {

          let label = <p><b>{n}</b></p>
          let value = <p>Error</p>;

          if (this.state.obj.obj.hasOwnProperty(n)) {
            if (n == '_id') {
              value = <p className="font-mono">{this.state.obj.obj._id}</p>
            }
            if (this.state.obj.schema[n].instance == 'String' || this.state.obj.schema[n].instance == 'Number') {
              value = <p>{this.state.obj.obj[n]}</p>;
            }
            else if (this.state.obj.schema[n].instance == 'Boolean') {
              if (this.state.obj.obj[n]) value = <p className="text-bold text-green-dark">TRUE</p>
              else  value = <p className="text-bold text-red-dark">FALSE</p>
            }
            else if (this.state.obj.schema[n].instance == 'Array') {
              if (this.state.obj.schema[n].hasOwnProperty('caster') &&
                this.state.obj.schema[n].caster.options.hasOwnProperty('ref')) {

                value = (
                  <ul>
                    {this.state.obj.obj[n].map((item, i) =>
                      <Link to={'/view/' + this.state.obj.schema[n].caster.options.ref + '/' + item}>{this.state.obj.schema[n].caster.options.ref + ': ' + item}</Link>
                    )}
                  </ul>
                );
                // value = <Link to={'/view/' + this.state.obj.schema[n].caster.options.ref + '/' + this.state.obj.obj[n]}>{this.state.obj.schema[n].caster.options.ref + ': ' + this.state.obj.obj[n]}</Link>
              }
              else {
                value = (
                  <ul>
                    {this.state.obj.obj[n].map((item, i) =>
                      <li>{JSON.stringify(item)}</li>
                    )}
                  </ul>
                );
              }
            }
          }
          else {
            value = <p>NULL</p>;
          }

          return (
            <div className="flex flex-wrap">
              <div className="text-right p-6 w-1/4">
                {label}
              </div>
              <div className="break-words p-6 w-3/4">
                {value}
              </div>
            </div>
          );
        })}
      </div>
    )
  }
}

module.exports = ViewObject;
