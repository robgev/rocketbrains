import React from 'react';
import Header from './components/header';
import Splash from './components/splashScreen';
import Tiles from './components/tiles';
import Footer from './components/footer';

const App = () => (
  <div className='container'>
    <Header />
    <Splash />
    <Tiles />
    <Footer />
  </div>
);

export default App
