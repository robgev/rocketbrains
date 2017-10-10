import React from 'react';
import Layout from '../components/layout';
import Splash from '../components/splashScreen';
import Tiles from '../components/tiles';

const HomePage = () => (
  <Layout>
    <Splash />
    <Tiles />
  </Layout>
);

export default HomePage
