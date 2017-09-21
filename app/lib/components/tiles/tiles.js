import React from 'react';

const Tile = ({ title, index, toggleMouseOver }) => (
  <div
    className="grid__cell grid__cell--with-border"
    onMouseEnter={toggleMouseOver}
    onMouseLeave={toggleMouseOver}
  >
      <svg className="cell__border">
          <rect x="0" y="0" width="100%" height="100%"></rect>
      </svg>

      <h1 className="cell__number heading-05">0{index}</h1>

      <h1 className="cell__title heading-05 flicker" style={{opacity: 1}}>{title}</h1>

      <div className="cell__line">
        <div className="x top" style={{width: '4.31034%', marginLeft: 0}}></div>
        <div className="y right" style={{height: 0, marginTop: 0}}></div>
        <div className="x bottom" style={{width: 0, marginRight: 0}}></div>
        <div className="y left" style={{height: 0, marginBottom: 0}}></div>
      </div>
  </div>
)

export default Tile;
