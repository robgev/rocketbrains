import React, { PureComponent } from 'react';
import ReactModal from 'react-modal';

import '../../scss/modal.scss';

class Preview extends PureComponent {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    const {
      isOpen,
      onRequestClose,
      imagePath,
    } = this.props;
    return (
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel='Application Form'
        style={{
          overlay: {
            backgroundColor: 'rgba(0,0,0,0.75)',
          },
          content: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            top: '15%',
            left: '0',
            right: '0',
            bottom: '15%',
            borderRadius: 0,
            padding: 0,
          }
        }}
        closeTimeoutMS={200}
      >
        <div className='closeButton' onClick={onRequestClose}>
          Close  <i className='fa fa-times' aria-hidden='true'></i>
        </div>
        <div className='slide-btn prev'>
          <i className='fa fa-angle-left' aria-hidden='true'></i>
        </div>
        <img src={`/images/${imagePath}.jpg`} style={{width: '100%'}}/>
        <div className='slide-btn next'>
          <i className='fa fa-angle-right' aria-hidden='true'></i>
        </div>
      </ReactModal>
    );
  }
}

export default Preview
