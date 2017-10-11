import React from 'react';
import Layout from '../components/layout';
import Splash from '../components/splashScreen';
import Tiles from '../components/tiles';

const tileItems = [
  'Web Development',
  'Mobile Apps',
  'Desktop & Web Apps',
  'Digital Marketing',
  'Graphic Design',
  'Animation',
]

const HomePage = () => (
  <Layout>
    <Splash />
    <Tiles tileItems={tileItems} />
  </Layout>
);

export default HomePage
