import React from 'react';
import 'scss/scrollHint.scss';

const ScrollHint = ({ color = '#666', top }) => (
  <div className='scroll-hint' style={{ color, top }}>
    Scroll  <span className='line'>-------------------------------</span>
  </div>
);

export default ScrollHint;
