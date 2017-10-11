import React from 'react';
import Layout from '../components/layout';
import Tiles from '../components/tiles';
import ApplyForm from '../components/applyForm';

import '../../scss/careers.scss';

const tileItems = [
  'Android developer',
  'Copyrighter internshipt',
  'Digital designer',
  'Frontend developer',
  'Illustrator',
  '',
]

const Careers = () => (
  <Layout className="careers">
    <section className="careers">
      <h1 className="heading-02 section-heading low-padding-top">Careers</h1>
      <Tiles tileItems={tileItems} />
      <ApplyForm />
    </section>
  </Layout>
);

export default Careers
