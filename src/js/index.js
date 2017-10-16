'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TweenMax from 'gsap';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Introduction from 'introduction';

require("../css/index.scss");

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleIsLoading: true
    }
  }

  componentDidMount() {
    let node = ReactDOM.findDOMNode(this.refs.title);
    TweenMax.from(node, 1, {y: -20, opacity: 0, onComplete: this.startIntro.bind(this) })
  }

  startIntro() {
    this.setState({
      titleIsLoading: false
    })
  }

  render() {
    return (
      <div>
        <h1 ref="title" className="title">Hello, I'm Aik Siang</h1>
        <Introduction
          visible={!this.state.titleIsLoading}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Index}>
      <IndexRoute component={Index}/>
    </Route>
    <Route path="/me/" component={Index}>
      <IndexRoute component={Index}/>
    </Route>
  </Router>
, document.getElementById('root'));
