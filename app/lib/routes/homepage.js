import React from 'react';
import Layout from '../components/layout';
import Splash from '../components/splashScreen';
import Tiles from '../components/tiles';

const tileItems = [
  { title: 'Web Development', link: ''},
  { title: 'Mobile Apps', link: ''},
  { title: 'Desktop & Web Apps', link: ''},
  { title: 'Digital Marketing', link: ''},
  { title: 'Graphic Design', link: ''},
  { title: 'Animation', link: ''},
]

const HomePage = () => (
  <Layout>
    <Splash />
    <Tiles tileItems={tileItems} />
  </Layout>
);

export default HomePage
