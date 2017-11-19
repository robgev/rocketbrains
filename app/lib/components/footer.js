import React from 'react';
import ShareActions from './shareActions';
import 'scss/footer.scss';

const Footer = () => (
  <div className="footer-container">
    <p className="copyright-copy">© RocketBrains</p>
    <ShareActions
      twitter
      facebook
      instagram
    />
  </div>
);

export default Footer
