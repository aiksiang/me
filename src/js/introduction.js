'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TweenMax from 'gsap';

require("../css/introduction.scss");

import Typewriting from 'typewriting';

export default class Introduction extends Component {
  constructor(props) {
    super(props);
    this.blinker = null;
    this.state = {
      startTyping: false
    }
  }

  componentDidMount() {
    this.blinker = ReactDOM.findDOMNode(this.refs.blinker);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.visible) {
      return
    }
    TweenMax.to(this.blinker, 0.4, { opacity: 1, repeat: -1, yoyo: true })
    setTimeout(function() { this.setState({ startTyping: true}); }.bind(this), 1500);
  }

  render() {
    return (
      <div id="introduction" ref="introduction">
        <Typewriting
          visible={this.state.startTyping}
          />
        <span id="blinker" ref="blinker">|</span>
      </div>
    );
  }
}
