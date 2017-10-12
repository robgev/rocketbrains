import React from 'react';
import Layout from '../../components/layout';
import Article from '../../components/article';
import data from './data';

const DetailedJobPosting = ({ match }) => {
  const jobInfo = data[match.params.jobID];
  const { title, overview, aboutRole, aboutYou } = jobInfo;
  return (
    <Layout className="careers">
      <Article
        title={title}
        imageSource='/images/careers.png'
        style={{paddingBottom: '300px'}}
      >
        <p>{overview}</p>
        <p><strong>About Role</strong></p>
        <p>{aboutRole}</p>
        <p><strong>About You</strong></p>
        <p>{aboutYou}</p>
        <p></p>
      </Article>
    </Layout>
  );
}

export default DetailedJobPosting
