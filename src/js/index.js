'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TweenMax from 'gsap';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

require("../css/index.scss");

class Index extends Component {
  componentDidMount() {
    let node = ReactDOM.findDOMNode(this);
    TweenMax.from(node, 1, {y: -0, opacity: 0, rotationX:135, transformOrigin:"top 100% -50"})
  }

  render() {
    return (
      <div>
        <h1 className="title">Hello, I'm Aik Siang</h1>
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
