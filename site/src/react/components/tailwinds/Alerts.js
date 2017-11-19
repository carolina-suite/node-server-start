
import React, { Component } from 'react';

class BannerAlert extends Component {

  constructor(props) {

    super(props);

    this.state = {
      alert: props.alert,
      color: props.color,
      message: props.message
    };
  }

  render() {

    let divClass = `bg-${this.state.color}-lightest border-t border-b border-${this.state.color} px-4 py-3 text-${this.state.color}-dark`;

    return (
      <div className={divClass} role="alert">
        <p className="font-bold">{this.state.alert}</p>
        <p className="text-sm">{this.state.message}</p>
      </div>
    );
  }
}

class LeftAccentAlert extends Component {

  constructor(props) {

    super(props);

    this.state = {
      alert: props.alert,
      color: props.color,
      message: props.message
    };
  }

  render() {

    let divClass = `bg-${this.state.color}-lightest border-l-4 border-${this.state.color} text-${this.state.color}-dark p-4`;

    return (
      <div className={divClass} role="alert">
        <p className="font-bold">{this.state.alert}</p>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

class SolidAlert extends Component {

  constructor(props) {
    super(props);
    this.state = {
      alert: props.alert,
      color: props.color,
      message: props.message
    };

    if (props.hasOwnProperty('faIcon')) {
      this.state.faIcon = props.faIcon;
    }
  }

  render() {

    let divClass = `bg-${this.state.color} flex font-bold px-4 py-3 items-center text-sm text-white`;
    let faIcon = '';

    if (this.state.faIcon) {
      faIcon = <span className={'fa fa-' + this.state.faIcon}></span>
    }

    return (
      <div className={divClass} role="alert">
        <p>{faIcon} {this.state.alert} {this.state.message}</p>
      </div>
    );
  }
}

class TitledAlert extends Component {

  constructor(props) {
    super(props);
    this.state = {
      alert: props.alert,
      color: props.color,
      message: props.message
    };
  }

  render() {

    let headerClass = `bg-${this.state.color} font-bold px-4 py-2 rounded rounded-t text-white`;
    let bodyClass = `bg-${this.state.color}-lightest border border-t-0 border-${this.state.color}-light px-4 py-3 rounded rounded-b text-${this.state.color}-dark`;

    return (
      <div role="alert">
        <div className={headerClass}>{this.state.alert}</div>
        <div className={bodyClass}>
          <p>{this.state.message}</p>
        </div>
      </div>
    );
  }
}

class TopAccentAlert extends Component {

  constructor(props) {
    super(props);
    this.state = {
      alert: props.alert,
      color: props.color,
      message: props.message
    };

    if (props.hasOwnProperty('faIcon')) {
      this.state.faIcon = props.faIcon;
    }
  }

  render() {

    let divClass = `bg-${this.state.color}-lightest border-t-4 border-${this.state.color} px-4 py-3 rounded rounded-b shadow-md text-${this.state.color}-darkest`;
    let faIcon = '';

    if (this.state.faIcon) {
      faIcon = <span className={'fa fa-' + this.state.faIcon}></span>
    }

    return (
      <div className={divClass} role="alert">
        <div className="flex">

          {faIcon}

          <div>
            <p className="font-bold">{this.state.alert}</p>
            <p class="text-sm">{this.state.message}</p>
          </div>
        </div>
      </div>
    );
  }
}

class TraditionalAlert extends Component {

  constructor(props) {
    super(props);
    this.state = {
      alert: props.alert,
      color: props.color,
      message: props.message
    };
  }

  render() {

    let divClass = `bg-${this.state.color}-lightest border border-${this.state.color}-light text-${this.state.color} px-4 py-3 relative rounded`;

    return (
      <div className={divClass} role="alert">

        <strong className="font-bold">{this.state.alert}</strong>

        <span className="block sm:inline">{this.state.message}</span>
      </div>
    );
  }
}

module.exports = {
  BannerAlert,
  LeftAccentAlert,
  SolidAlert,
  TitledAlert,
  TopAccentAlert,
  TraditionalAlert
};
