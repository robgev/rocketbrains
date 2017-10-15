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
        top: '15%',
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
      Close  <i className="fa fa-times" aria-hidden="true"></i>
    </div>
    <h1 className="heading-02 section-heading">Application Form</h1>
    <form className="registration-form inverted">
      <a href="#">
        <span className="block-button text-bordered" data-bind="" style={{borderColor: '#000'}}>
            <span className="bg"></span>
            <span className="text submit-button" style={{color: '#000'}}>Submit</span>
        </span>
      </a>
    </form>
  </ReactModal>
);

export default Modal
