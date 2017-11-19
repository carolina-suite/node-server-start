
import React, { Component } from 'react';

class AdminHeader extends Component {
  render() {
    return(
      <nav className="bg-header-bg flex flex-wrap items-center justify-between p-6 shadow-lg">
        <div className="flex flex-no-shrink items-center mr-6 text-header-text">
          <span className="font-semibold text-xl tracking-tight">Admin Panel</span>
        </div>
        <div className="block flex-grow w-full lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a className="block mr-4 mt-4 no-underline text-header-text hover:text-text2 lg:inline-block lg:mt-0" href="/">Site Home</a>
          </div>
        </div>
      </nav>
    )
  }
}

export default AdminHeader;
