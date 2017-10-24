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
      </ReactModal>
    );
  }
}

export default Preview
