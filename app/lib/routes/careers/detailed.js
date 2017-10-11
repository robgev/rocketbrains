import React from 'react';
import Layout from '../../components/layout';

const DetailedJobPosting = ({ match }) => (
  <Layout className="careers">
    <p>Detailed page of {match.params.jobID}</p>
  </Layout>
);

export default DetailedJobPosting
