import React from 'react';
import Layout from '../components/layout';
import Article from '../components/article';

const About = () => (
  <Layout>
    <Article
      title='About'
      imageSource='/images/about.jpg'
      style={{paddingBottom: '300px'}}
    >
      <p>
        Rocket Brains, est. 2017, in an Armenia based full service digital agency
      </p>
      <p>
        We work with the world's leading agencies, biggest brands and innovative media and technology companies. We turn ideas,
        strategy and IP into award-winning campaigns, film, content, products and platforms
      </p>
      <p>
      </p>
    </Article>
  </Layout>
);

export default About
