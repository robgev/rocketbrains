import React, {Component} from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ReactDOM from 'react-dom';

import HomePage from './lib/routes/homepage';
import About from './lib/routes/about';

import './scss/base.scss';
import './scss/test.scss';

class ApplicationRoot extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/home' component={HomePage} />
          <Route path='/about' component={About} />
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(
    <ApplicationRoot />,
    document.getElementById('root')
);
