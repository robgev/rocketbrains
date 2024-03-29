import React from 'react';
import { Link } from 'react-router-dom';
import 'scss/caseTiles.scss';
import { fillArrayWithEmptyTiles } from 'utils';

const CaseTiles = ({ tileItems }) => {
  const filledArray = fillArrayWithEmptyTiles(tileItems, {title: ''});
  return (
    <ul className='cases case-tiles'>
      {filledArray.map((tileItem, idx) => tileItem.title ? (
        	<li className='case-block' key={tileItem.title} style={{paddingLeft: 0}}>
          	<Link to={tileItem.link} className='case-wrapper'>
          		<figure className='image-wrapper'>
          			<span className='img-data-wrap img-big' >
                  <img alt={tileItems.alt} src={tileItem.imageSource} />
                </span>
          			<span className='img-data-wrap img-small'></span>
          		</figure>
          		<div className='content'>
          			<h3 className='case-title heading-04'>{tileItem.title}</h3>
          		</div>
          	</Link>
          </li>
        ) : (
        	<li className='case-block block-empty' key={`tileItem-empty-${idx}`}>
            <span
              className='diagonal'
              style={{
                width: 679,
                transformOrigin: 'left 50% 0px',
                transform: 'matrix(1.035, -0.7071, 0.7071, 0.7071, 0, 0)'
              }}></span>
          </li>
        )
      )}
    </ul>
  );
}

export default CaseTiles
