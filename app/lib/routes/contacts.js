import React, { PureComponent } from 'react';
import Layout from 'components/layout';
import Article from 'components/article';
import SelectField from 'components/selectField';
import ContactsMap from 'components/maps';

import 'scss/contacts.scss';

const menuOptions = [
  { value: 'website', label: 'Website' },
  { value: 'mobile_app', label: 'Mobile Application' },
  { value: 'desktop_app', label: 'Desktop Application' },
  { value: 'web_app', label: 'Web Application' },
  { value: 'digital_marketing', label: 'Digital Marketing' },
  { value: 'graphic_design', label: 'Graphic Design' },
  { value: 'animation', label: 'Animation' },
]

class Contacts extends PureComponent {
  state = {
    mapOpen: false,
  }

  toggleMap = () => {
    const { mapOpen } = this.state;
    this.setState({ mapOpen: !mapOpen });
  }

  render() {
    const { mapOpen } = this.state;
    return (
      <Layout>
        <Article
          title='Contact us'
          scrollColor='white'
          imageSource='/images/contacts.jpg'
          imageOverlayText={`We look forward
            to talking to you`}
          articleClassName='careers-article'
          className='carrers-article-wrapper'
        >
          <p style={{paddingBottom: '30px'}}>
            For new business and all other questions, comments or information please fill out the form
            below. We’ll get back to you as soon as possible.
          </p>
          <form className='registration-form inverted'>
            <SelectField
              placeholder='Subject'
              className='select-field'
              options={menuOptions}
            />
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
        <div className='map-container'>
          <a onClick={this.toggleMap} className={`block-button map-button ${ mapOpen ? '' : 'hidden' }`}>
            <span className='icn icon-cross'></span>
          </a>
          <ContactsMap
            mapElement={<div style={{ height: `100%` }} />}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div className={`map-wrapper ${ mapOpen ? 'open' : ''}`} />
            }
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCxcXS-j8QdknVliyLQ-kDIQEjPDMvKtYI&v=3.exp&libraries=geometry,drawing,places"
          />
        </div>
        <div className='office-info' style={{paddingBottom: '150px'}}>
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
            <a onClick={this.toggleMap} className={`block-button map-button ${ mapOpen ? 'hidden' : '' }`}>
              <span className='icn icon-pin'></span>
            </a>
            <div className='bottom-text'>
              <p>{`Located just five minutes away from American University of Armenia, our office is
                where we produce the majority of our work. We’ve been here ever since 2017, growing
                from a 3 man basement to 35,000 square feet of multimedia muscle.
              `}</p>
              <p>{`
                Marshal Baghramyan Avenue 49/2
                0019 Yerevan
                Armenia
              `}</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Contacts
