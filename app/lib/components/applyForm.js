import React, {PureComponent} from 'react';
import Modal from './modal';
import 'scss/apply-form.scss';

class ApplyForm extends PureComponent {
  constructor() {
    super();
    this.state={
      modalOpen: false,
    }
  }

  openModal = () => {
    this.setState({modalOpen: true});
  }

  closeModal = () => {
    this.setState({modalOpen: false});
  }

  render() {
    const { modalOpen } = this.state;
    return (
      <div>
        <form className="apply-form" action="" noValidate="">
          <div className="col-info">
            <p className="copy-03 copy-inverted">
              {` Nothing that matches your skill set? We have
                awesome jobs for awesome people. Tell us
                about yourself and your trade and we may
                dream up your digital dream job just like that.
                Seriously, we’re open to open applications. `}
            </p>
          </div>
          <div className="col-fields">
            <a className="block-button text-bordered apply-button" onClick={this.openModal}>
              <span className="bg"></span>
              <span className="text">Apply for a job</span>
            </a>
          </div>
        </form>
        <Modal
          isOpen={modalOpen}
          onRequestClose={this.closeModal}
          positionPlaceholder={'Your dream position'}
        />
      </div>
    );
  }
}

export default ApplyForm
