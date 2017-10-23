import React from 'react';
import '../../scss/caseTiles.scss'

const CaseTiles = ({tileItems}) => (
  <ul className='cases' style={{paddingBottom: '85%'}}>
    {tileItems.map((tileItem, idx) => tileItem.title ? (
      	<li className='case-block' key={tileItem.title} style={{paddingLeft: 0}}>
        	<a className='case-wrapper'>
        		<figure className='image-wrapper'>
        			<span className='img-data-wrap img-big' >
                <img alt={tileItems.alt} src={tileItem.imageSource} />
              </span>
        			<span className='img-data-wrap img-small'></span>
        		</figure>
        		<div className='content'>
        			<h3 className='case-title heading-04'>{tileItem.title}</h3>
        		</div>
        	</a>
        </li>
      ) : (
      	<li className='case-block block-empty' key={`tileItem-empty-${idx}`}>
          <span
            className='diagonal'
            style={{
              width: 679,
              transformOrigin: 'left 50% 0px',
              transform: 'matrix(0.7071, -0.7071, 0.7071, 0.7071, 0, 0)'
            }}></span>
        </li>
      )
    )}
  </ul>
);

export default CaseTiles
