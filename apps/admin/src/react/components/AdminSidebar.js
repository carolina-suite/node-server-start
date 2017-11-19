
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AdminService from '../lib/AdminService';

class AdminSidebar extends Component {

  constructor(props) {

    super(props);

    this.state = {
      apps: []
    };
  }

  async componentDidMount() {
    var data = await AdminService.getApps();
    this.setState({
      apps: data
    });
  }

  render() {
    return(
      <div className="bg-background h-screen pin-r pl-6 pt-6 text-header-text w-1/6">

        <h2 className="mb-4">Apps</h2>

        {this.state.apps.map((app, i) =>
          <div>

            <h3 className="mb-2 pl-2" key={i}>{app.name}</h3>

            {app.models.map((model, j) =>
              <p className="pl-4" key={i + '_model_' + j}>
                <Link className="text-header-text no-underline hover:text-blue" to={'/model/'+model}>{model}</Link>
              </p>
            )}
          </div>
        )}
      </div>
    )
  }
}

export default AdminSidebar;
