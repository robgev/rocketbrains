import React from 'react';
import Layout from 'components/layout';
import SectionPage from 'components/sectionPage';
import CaseTiles from 'components/caseTiles';
import Preview from 'components/preview';
import Article from 'components/article';
import data from './data';

import 'scss/homepageDetailed.scss';

const DetailedSectionInfo = ({ match }) => {
  const { imageSource, title, tileItems, videoSource } = data[match.params.sectionID];
  return tileItems.length ? (
      <Layout>
        <SectionPage
          videoSource={videoSource}
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
  ) : (
    <Layout>
      <Article
        withLinkButton
        buttonLink='/contacts'
        buttonText='Contact us'
        imageOverlayText={title}
        imageSource={imageSource}
        className='under-construction-wrapper'
        articleClassName='under-construction-article'
      >
        <p style={{paddingBottom: 20}}>
          This page is currently under construction, if you have any questions in the
          meantime, please contact us using the contact button below.
        </p>
      </Article>
    </Layout>
  );
}

export default DetailedSectionInfo
