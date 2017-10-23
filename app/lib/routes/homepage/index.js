import React from 'react';
import Layout from '../../components/layout';
import Splash from '../../components/splashScreen';
import Tiles from '../../components/tiles';

const tileItems = [
  { title: 'Web Development', link: '/home/web-development'},
  { title: 'Mobile Apps', link: '/home/mobile-apps'},
  { title: 'Desktop & Web Apps', link: '/home/desktop-apps'},
  { title: 'Digital Marketing', link: '/home/digital-marketing'},
  { title: 'Graphic Design', link: '/home/graphic-design'},
  { title: 'Animation', link: '/home/animation'},
]

const HomePage = () => (
  <Layout>
    <Splash />
    <Tiles tileItems={tileItems} />
  </Layout>
);

export default HomePage
