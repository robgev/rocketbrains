import React from 'react';
import Layout from 'components/layout';
import Tiles from 'components/tiles';
import data from './data';

import 'scss/blogPost.scss';

const Blog = () => (
  <Layout>
    <h1 className='heading-02 section-heading blog-header'>Blog</h1>
    <Tiles tileItems={data} className='blog-tiles' />
  </Layout>
);

export default Blog
