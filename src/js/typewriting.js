'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TweenMax from 'gsap';

require("../css/typewriting.scss");

export default class Typewriting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentText: ""
    }
  }

  componentDidMount() {
    this.text = ReactDOM.findDOMNode(this.refs.typewriting);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.visible) {
      return
    }
    this.setState({
      currentText: "I Code"
    })
  }

  render() {
    return (
      <div id="typewriting" ref="typewriting">
        {this.state.currentText}
      </div>
    );
  }
}
