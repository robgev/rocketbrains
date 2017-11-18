import React from 'react';
import 'scss/footer.scss';

const Footer = () => (
  <div className="footer-container">
    <p className="copyright-copy">© RocketBrains</p>
    <ul className="block-squared-list block-squared-full-right">
  		<li className="block-item">
        <a href="http://instagram.com/" target="_blank" className="block-button">
          <span className="bg bg-inst"></span>
          <span className="icn icon-instagram"></span>
        </a>
      </li>
  		<li className="block-item">
        <a href="https://www.facebook.com/" target="_blank" className="block-button">
          <span className="bg bg-fb"></span>
          <span className="icn icon-facebook"></span>
        </a>
      </li>
  		<li className="block-item">
        <a href="https://www.twitter.com/" target="_blank" className="block-button">
          <span className="bg bg-tw"></span>
          <span className="icn icon-twitter"></span>
        </a>
      </li>
	  </ul>
  </div>
);

export default Footer
