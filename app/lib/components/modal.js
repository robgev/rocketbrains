import React from 'react';
import ReactModal from 'react-modal';

import '../../scss/modal.scss';

const Modal = ({isOpen, onRequestClose}) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel='Application Form'
    style={{
      overlay: {
        backgroundColor: 'rgba(0,0,0,0.75)',
      },
      content: {
        top: '13%',
        left: '27%',
        right: '27%',
        bottom: '15%',
        borderRadius: 0,
        paddingLeft: 50,
        paddingRight: 50,
      }
    }}
    closeTimeoutMS={200}
  >
    <div className='closeButton' onClick={onRequestClose}>
      Close  <i className='fa fa-times' aria-hidden='true'></i>
    </div>
    <h1 className='heading-02 section-heading'>Application Form</h1>
    <form className='registration-form inverted'>
      <div className='form-group big-margin-bottom'>
        <input type='text' placeholder='Your dream position' />
      </div>
      <div className='applicant-info big-margin-bottom'>
        <div className='form-group' style={{flex: 1}}>
          <input type='text' placeholder='Your name' />
          <input type='text' placeholder='Upload resume' />
        </div>
        <div className='form-group' style={{flex: 2}}>
          <div className='contact-info'>
            <input type='text' placeholder='Email' />
            <input type='text' placeholder='Phone number' />
          </div>
          <div className='contact-info'>
            <input type='text' placeholder='Message' />
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
  </ReactModal>
);

export default Modal
