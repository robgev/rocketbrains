import React, {Component} from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ReactDOM from 'react-dom';

import HomePage from './lib/routes/homepage';
import About from './lib/routes/about';
import Careers from './lib/routes/careers';
import DetailedJobPosting from './lib/routes/careers/detailed';
import Contacts from './lib/routes/contacts';

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
          <Route path='/careers/:jobID' component={DetailedJobPosting} />
          <Route path='/careers' component={Careers} />
          <Route path='/contacts' component={Contacts} />
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(
    <ApplicationRoot />,
    document.getElementById('root')
);
