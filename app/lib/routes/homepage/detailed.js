import React from 'react';
import Layout from '../../components/layout';
import SectionPage from '../../components/sectionPage';
import CaseTiles from '../../components/caseTiles';
import data from './data';
import { fillArrayWithEmptyTiles } from '../../utils';

import '../../../scss/homepageDetailed.scss';

const DetailedSectionInfo = ({match}) => {
  const { imageSource, title, tileItems } = data[match.params.sectionID];
  return (
    <Layout>
      <SectionPage
        title={'Latest and Greatest'}
        imageSource={imageSource}
        className='hompage-detailed-article-wrapper'
        imageOverlayText={title}
        articleClassName='hompage-detailed-article'
      >
        <CaseTiles tileItems={fillArrayWithEmptyTiles(tileItems, {title: ''})} />
      </SectionPage>
    </Layout>
  );
}

export default DetailedSectionInfo
