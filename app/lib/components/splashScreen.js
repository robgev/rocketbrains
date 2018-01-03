import React from 'react';
import ScrollHint from './scrollHint';
import 'scss/splash.scss';

const Splash = () => (
  <section className='splash-container'>
    <div className='social'>
      <a href="https://www.facebook.com/" target="_blank" className="block-button splash-button">
        <span className="icn icon-facebook"></span>
      </a>
      <a href="https://www.twitter.com/" target="_blank" className="block-button splash-button">
        <span className="icn icon-twitter"></span>
      </a>
      <a href="https://www.instagram.com/" target="_blank" className="block-button splash-button">
        <span className="icn icon-instagram"></span>
      </a>
    </div>
    <div className='company-name centered'>
      <div className='small-center centered'>
        <h3 className='splash-text top'> We are </h3>
        <h1 className='name'>
          Rocket Brains
        </h1>
        <h3 className='splash-text bottom'>
          { `A full service
            digital agency` }
        </h3>
      </div>
    </div>
    <ScrollHint />
  </section>
);

export default Splash
