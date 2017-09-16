import React from 'react';
import '../../scss/splash.scss';

const Splash = () => (
  <div className='splash-container'>
    <div className='social'>
      <div>a</div>
      <div>a</div>
      <div>a</div>
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
  </div>
);

export default Splash
