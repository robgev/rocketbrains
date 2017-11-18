import React from 'react';
import '../../scss/statistics.scss';

const Statistics = ({ data }) => (
  <section className='view'>
    <ul className='statistics-tiles inverted'>
      {data.map((statisticData, idx) => (
        	<li className='statistics-block' key={`statisticData-${idx}`}>
            <p className='key'>{statisticData.percentage}%</p>
            <p className='value'>{statisticData.description}</p>
          </li>
      ))}
    </ul>
  </section>
);

export default Statistics
