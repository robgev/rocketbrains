import React,  { PureComponent } from 'react';
import Layout from '../../components/layout';
import Article from '../../components/article';
import Modal from '../../components/modal';
import data from './data';

class DetailedJobPosting extends PureComponent {
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
    const jobInfo = data[this.props.match.params.jobID];
    const { title, overview, aboutRole, aboutYou } = jobInfo;
    return (
      <Layout className="careers">
        <Article
          title={title}
          withClickableButton
          imageSource='/images/careers.png'
          style={{paddingBottom: '300px'}}
          onClick={this.openModal}
          buttonText='Apply for this job'
        >
          <p>{overview}</p>
          <p><strong>About Role</strong></p>
          <p>{aboutRole}</p>
          <p><strong>About You</strong></p>
          <p>{aboutYou}</p>
          <p></p>
        </Article>
        <Modal
          fixPositionPlaceholderValue
          positionPlaceholder={title}
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
        />
      </Layout>
    );
  }
}

export default DetailedJobPosting
