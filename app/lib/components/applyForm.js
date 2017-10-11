import React from 'react';
import '../../scss/apply-form.scss';

const ApplyForm = () => (
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
      <a target="_blank" className="block-button text-bordered apply-button" href="#">
        <span className="bg"></span>
        <span className="text">Apply for a job</span>
      </a>
    </div>
  </form>
);

export default ApplyForm
