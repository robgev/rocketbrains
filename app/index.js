import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './scss/base.scss';
import './scss/test.scss';
import App from './lib/App';

class ApplicationRoot extends Component {
  render() {
    return(
      <App />
    )
  }
}

ReactDOM.render(
    <ApplicationRoot />,
    document.getElementById('root')
);
