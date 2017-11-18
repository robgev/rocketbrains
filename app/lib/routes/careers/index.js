import React from 'react';
import Layout from 'components/layout';
import Tiles from 'components/tiles';
import ApplyForm from 'components/applyForm';

import 'scss/careers.scss';

const tileItems = [
  { title: 'Android developer', link: '/careers/android'},
  { title: 'Copyrighter internshipt', link: '/careers/copyright'},
  { title: 'Digital designer', link: '/careers/designer'},
  { title: 'Frontend developer', link: '/careers/frontend'},
  { title: 'Illustrator', link: '/careers/illustrator'},
  { title: '', link: ''},
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
