import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import LetterTile from './letterTile';
import Tile from './tiles';
import { fillArrayWithEmptyTiles } from 'utils';

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
    const { tileItems: items, className } = this.props;
    const emptyTileItem = { title: '', link: ''};
    const tileItems = fillArrayWithEmptyTiles(items, emptyTileItem);
    return (
      <div>
        <div className={`component-videos-grid ${className}`}>
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
              <div className="bg-image" style={{opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)', backgroundImage: 'url("/images/cosmos.jpg")'}}></div>
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
