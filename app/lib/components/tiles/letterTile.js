import React from 'react';

const LetterTile = ({ letter, over }) => (
  <div className="grid__cell" style={{opacity: over ? 1 : 0}}>
      <h1 className="cell__letter heading-02">{letter}</h1>
      <svg className="cell__diagonal">
          <line x1="100%" y1="0" x2="0" y2="100%"></line>
      </svg>
  </div>
)

export default LetterTile;
