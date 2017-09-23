import React, {PureComponent} from 'react';
import Header from './components/header';
import Splash from './components/splashScreen';
import Tiles from './components/tiles';
import Footer from './components/footer';

class App extends PureComponent {
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
    this.setState({ scrollTop: document.body.scrollTop });
  }

  render() {
    const { scrollTop } = this.state;
    return (
      <div className='container'>
        <Header scrollTop={scrollTop} />
        <Splash />
        <Tiles />
        <Footer />
      </div>
    );
  }
}

export default App
