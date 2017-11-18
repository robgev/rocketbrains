import React from 'react';
import Layout from 'components/layout';
import Tiles from 'components/tiles';
import data from './data';
import { fillArrayWithEmptyTiles } from 'utils';

const Blog = () => (
  <Layout>
    <Tiles tileItems={data} />
  </Layout>
);

export default Blog
