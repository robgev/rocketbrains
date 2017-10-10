import React, {PureComponent} from 'react';
import Header from './header';
import Footer from './footer';

class Layout extends PureComponent {
  constructor() {
    super();
    this.state = {
      scrollTop: 0
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.setState({ scrollTop });
  }

  render() {
    const { scrollTop } = this.state;
    return (
      <div className='container'>
        <Header scrollTop={scrollTop} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout
