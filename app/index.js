import React, { Component } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ReactDOM from 'react-dom';

import Blog from './lib/routes/blog';
import About from './lib/routes/about';
import Careers from './lib/routes/careers';
import NotFound from './lib/routes/error';
import Contacts from './lib/routes/contacts';
import HomePage from './lib/routes/homepage';
import DetailedBlogPost from './lib/routes/blog/detailed';
import DetailedJobPosting from './lib/routes/careers/detailed';
import DetailedSectionInfo from './lib/routes/homepage/detailed';
import DetailedCaseStudy from './lib/routes/homepage/caseDetailed';

import './scss/base.scss';
import './scss/test.scss';
import './scss/utils/medias.scss';
import '../public/font/fontawesome/scss/font-awesome.scss';

class ApplicationRoot extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/home/:sectionID/:itemID' component={DetailedCaseStudy} />
          <Route path='/home/:sectionID' component={DetailedSectionInfo} />
          <Route path='/home' component={HomePage} />
          <Route path='/about' component={About} />
          <Route path='/careers/:jobID' component={DetailedJobPosting} />
          <Route path='/careers' component={Careers} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/blog/:postID' component={DetailedBlogPost} />
          <Route path='/blog' component={Blog} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(
    <ApplicationRoot />,
    document.getElementById('root')
);
