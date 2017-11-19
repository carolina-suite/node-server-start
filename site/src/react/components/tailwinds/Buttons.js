
import React, { Component } from 'react';

class BorderedButton extends Component {

  constructor(props) {

    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      color: props.color,
      text: props.text,
      textColor: 'white'
    };

    if (props.hasOwnProperty('textColor')) {
      this.state.textColor = props.textColor;
    }
  }

  handleClick() {
    this.props.onClick();
  }

  render() {

    let buttonClass = `bg-${this.state.color} border border-${this.state.color}-darker font-bold px-4 py-2 rounded text-white hover:bg-${this.state.color}-dark`;
    return (
      <button className={buttonClass} onClick={this.handleClick}>
        {this.state.text}
      </button>
    )
  }
}

class Button extends Component {

  constructor(props) {

    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      color: props.color,
      text: props.text,
      textColor: 'white'
    };

    if (props.hasOwnProperty('textColor')) {
      this.state.textColor = props.textColor;
    }
  }

  handleClick() {
    this.props.onClick();
  }

  render() {

    let buttonClass = `bg-${this.state.color} font-bold px-4 py-2 rounded text-${this.state.textColor} hover:bg-${this.state.color}-dark`
    return (
      <button className={buttonClass} onClick={this.handleClick}>
        {this.state.text}
      </button>
    )
  }
}

class IconButton extends Component {

  constructor(props) {

    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      color: props.color,
      text: props.text,
      textColor: 'white'
    };

    if (props.hasOwnProperty('faIcon')) {
      this.state.faIcon = props.faIcon;
    }
    if (props.hasOwnProperty('textColor')) {
      this.state.textColor = props.textColor;
    }
  }

  handleClick() {
    this.props.onClick();
  }

  render() {

    let buttonClass = `bg-${this.state.color} font-bold items-center inline-flex px-4 py-2 rounded text-${this.state.textColor}-dark hover:bg-${this.state.color}-dark`;
    let icon = '';

    if (this.state.hasOwnProperty('faIcon')) {
      icon = <span className={'fa + fa-' + this.state.faIcon}></span>
    }

    return (
      <button className={buttonClass} onClick={this.handleClick}>

        {icon}

        <span>&nbsp;</span>

        {this.state.text}
      </button>
    )
  }
}

class OutlineButton extends Component {

  constructor(props) {

    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      color: props.color,
      text: props.text,
      textColor: 'white'
    };

    if (props.hasOwnProperty('textColor')) {
      this.state.textColor = props.textColor;
    }
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    let buttonClass = `bg-transparent border border-${this.state.color} font-semibold px-4 py-2 rounded text-${this.state.color}-dark hover:bg-${this.state.color} hover:border-transparent hover:text-${this.state.textColor}`
    return (
      <button className={buttonClass} onClick={this.handleClick}>
        {this.state.text}
      </button>
    )
  }
}

class PillButton extends Component {

  constructor(props) {

    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      color: props.color,
      text: props.text,
      textColor: 'white'
    };

    if (props.hasOwnProperty('textColor')) {
      this.state.textColor = props.textColor;
    }
  }

  handleClick() {
    this.props.onClick();
  }

  render() {

    let buttonClass = `bg-${this.state.color} font-bold px-4 py-2 rounded-full text-${this.state.textColor} hover:bg-${this.state.color}-dark`
    return (
      <button className={buttonClass} onClick={this.handleClick}>
        {this.state.text}
      </button>
    )
  }
}

class ThreeDimensionalButton extends Component {

  constructor(props) {

    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      color: props.color,
      text: props.text,
      textColor: 'white'
    };

    if (props.hasOwnProperty('textColor')) {
      this.state.textColor = props.textColor;
    }
  }

  handleClick() {
    this.props.onClick();
  }

  render() {

    let buttonClass = `bg-${this.state.color} border-b-4 border-${this.state.color}-dark font-bold px-4 py-2 rounded text-white hover:bg-${this.state.color}-light`;
    return (
      <button className={buttonClass} onClick={this.handleClick}>
        {this.state.text}
      </button>
    )
  }
}

module.exports = {
  BorderedButton,
  Button,
  IconButton,
  OutlineButton,
  PillButton,
  ThreeDimensionalButton
};
