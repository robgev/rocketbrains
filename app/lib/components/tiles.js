import React from 'react';

const tileItems = [
  'Web Development',
  'Mobile Apps',
  'Desktop & Web Apps',
  'Digital Marketing',
  'Graphic Design',
  'Animation',
]

const Tile = ({ title, index }) => (
  <div className="grid__cell grid__cell--with-border">
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

const LetterTile = ({ letter }) => (
  <div className="grid__cell" style={{opacity: 0}}>
      <h1 className="cell__letter heading-02">{letter}</h1>
      <svg className="cell__diagonal">
          <line x1="100%" y1="0" x2="0" y2="100%"></line>
      </svg>
  </div>
)

const Tiles = () => (
  <div>
    <div className="component-videos-grid">
    <div className="grid__foreground">
      {tileItems.map((item, idx) => (
        <Tile title={item} index={idx + 1} key={`${item}-${idx}`} />
      ))}
    </div>

    <div className="grid__background">
        <div className="bg-image" style={{opacity: 0.699, transform: 'translate3d(0, 0, 0) scale(0.99699, 0.99699)'}}></div>
        {tileItems.map((item, idx) => (
          <LetterTile letter={item.charAt(0)} key={`letterTile-${idx}`}/>
        ))}
    </div>

</div>
  </div>
);

export default Tiles;
