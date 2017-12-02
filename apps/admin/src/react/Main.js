
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import AdminHeader from './components/AdminHeader';
import AdminSidebar from './components/AdminSidebar';
import CreateObject from './components/CreateObject';
import DeleteObject from './components/DeleteObject';
import Home from './components/Home';
import Model from './components/Model';
import UpdateObject from './components/UpdateObject';
import ViewObject from './components/ViewObject';

class Main extends Component {
  render() {
    return(
      <div>

        <AdminHeader />

        <div className="flex flex-wrap">

          <div className="h-screen pin-l w-5/6">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/model/:modelName" component={Model} />
              <Route exact path="/create/:modelName" component={CreateObject} />
              <Route exact path="/view/:modelName/:objectId" component={ViewObject} />
              <Route exact path="/edit/:modelName/:objectId" component={UpdateObject} />
              <Route exact path="/delete/:modelName/:objectId" component={DeleteObject} />
            </Switch>
          </div>

          <AdminSidebar />
        </div>
      </div>
    )
  }
}

export default Main;
