import React, { PureComponent } from 'react';
import LetterTile from './letterTile';
import Tile from './tiles';

class Tiles extends PureComponent {
  constructor() {
    super()
    this.state = {
      over: null,
    }
  }

  toggleMouseOver = index => {
    this.setState({ over: index })
  }

  render() {
    const { over } = this.state;
    const { tileItems } = this.props;
    return (
      <div>
        <div className="component-videos-grid">
          <div className="grid__foreground">
            {tileItems.map((item, idx) => (
              !item ? null :
              <Tile
                title={item}
                index={idx + 1}
                over={over === idx}
                key={`${item}-${idx}`}
                toggleMouseOver={() => this.toggleMouseOver(idx)}
              />
            ))}
          </div>

          <div className="grid__background">
              <div className="bg-image" style={{opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)', backgroundImage: 'url("http://cosmos.astro.caltech.edu/system/media_files/binaries/64/original/heic1313b.jpg?1458838335")'}}></div>
              {tileItems.map((item, idx) => (
                <LetterTile letter={item.charAt(0)} key={`letterTile-${idx}`} over={!item ? true : over === idx} />
              ))}
          </div>
        </div>
      </div>
    );
  }

}

export default Tiles;
