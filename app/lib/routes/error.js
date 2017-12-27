import React from 'react';
import Name from 'assets/name';
import { Link } from 'react-router-dom';

import 'scss/notFound.scss';

const NotFound = () => (
  <div className='main-container'>
    <div className="main-logo" href="#">
      <div className="logo-mm">
        <Name />
      </div>
    </div>
    <div className='error-text'>
      <p className='digit left'>4</p>
      <img className='zero-image' src='/images/moon.png' />
      <p className='digit right'>4</p>
    </div>
    <p className='error-description'>It looks like you are lost in space</p>
    <Link to='/'>
      <span className='block-button text-bordered'>
          <span className='bg'></span>
          <span className='text'>Go back home</span>
      </span>
    </Link>
  </div>
)

export default NotFound
