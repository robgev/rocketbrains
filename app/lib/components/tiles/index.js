import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
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
              !item.title ? null :
              !item.link ?
                <Tile
                  index={idx + 1}
                  title={item.title}
                  over={over === idx}
                  key={`${item.title}-${idx}`}
                  toggleMouseOver={() => this.toggleMouseOver(idx)}
                />
              :
                <Link to={item.link} key={`${item.title}-${idx}`}>
                  <Tile
                    index={idx + 1}
                    title={item.title}
                    over={over === idx}
                    toggleMouseOver={() => this.toggleMouseOver(idx)}
                  />
                </Link>
            ))}
          </div>

          <div className="grid__background">
              <div className="bg-image" style={{opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)', backgroundImage: 'url("http://cosmos.astro.caltech.edu/system/media_files/binaries/64/original/heic1313b.jpg?1458838335")'}}></div>
              {tileItems.map((item, idx) => (
                <LetterTile letter={item.title.charAt(0)} key={`letterTile-${idx}`} over={!item.title ? true : over === idx} />
              ))}
          </div>
        </div>
      </div>
    );
  }

}

export default Tiles;
