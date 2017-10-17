import React from 'react';
import Layout from '../components/layout';
import Article from '../components/article';

import '../../scss/contacts.scss';

const Contacts = () => (
  <Layout>
    <Article
      title='Contact us'
      imageSource='/images/contacts.jpg'
      articleClassName='careers-article'
    >
      <p style={{paddingBottom: '30px'}}>
        For new business and all other questions, comments or information please fill out the form
        below. We’ll get back to you as soon as possible.
      </p>
      <form className='registration-form inverted'>
        <div className='form-group big-margin-bottom'>
          <input type='text' className='select-field' placeholder='I want to...' />
        </div>
        <div className='applicant-info big-margin-bottom'>
          <div className='form-group' style={{flex: 1}}>
            <input type='text' placeholder='Your name' />
            <input type='text' placeholder='Company' />
          </div>
          <div className='form-group' style={{flex: 2}}>
            <div className='contact-info'>
              <input type='text' placeholder='Email' />
              <input type='tel' placeholder='Phone number' />
            </div>
            <div className='contact-info'>
              <input type='text' placeholder='Give us some details...' />
            </div>
          </div>
        </div>
        <a href='#'>
          <span className='block-button text-bordered' style={{borderColor: '#000'}}>
              <span className='bg'></span>
              <span className='text submit-button'>Submit</span>
          </span>
        </a>
      </form>
    </Article>
    <div className='office-info' style={{paddingBottom: '300px'}}>
      <div className='header'>
        <h1 className='heading-02'>Our Office</h1>
      </div>
      <div className='address-info case-block'>
        <figure className='image-wrapper'>
          <span className='img-data-wrap img-big'>
            <img alt='Northern Avenue, Yerevan' src='/images/yerevan.jpg' />
          </span>
        </figure>
        <div className='image-overlay-text'>
          <h3 className='heading-04'>Yerevan</h3>
          <p>info@rocketbrains.co    |    +1 937 723 2300</p>
        </div>
      </div>
    </div>
  </Layout>
);

export default Contacts
