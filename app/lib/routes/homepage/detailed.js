import React from 'react';
import Layout from 'components/layout';
import SectionPage from 'components/sectionPage';
import CaseTiles from 'components/caseTiles';
import Preview from 'components/preview';
import data from './data';

import 'scss/homepageDetailed.scss';

const DetailedSectionInfo = ({ match }) => {
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
        <CaseTiles tileItems={tileItems} />
        <Preview
          isOpen={!!match.params.itemID}
          onRequestClose={() => window.history.back()}
          imagePath={`${match.params.sectionID}/${match.params.itemID}`}
        />
      </SectionPage>
    </Layout>
  );
}

export default DetailedSectionInfo
