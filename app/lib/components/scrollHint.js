import React from 'react';
import 'scss/scrollHint.scss';

const ScrollHint = ({ color = '#666' }) => (
  <div className='scroll-hint' style={{ color }}>
    Scroll  <span className='line'>-------------------------------</span>
  </div>
);

export default ScrollHint;
