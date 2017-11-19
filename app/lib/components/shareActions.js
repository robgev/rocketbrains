import React from 'react';

const ShareActions = ({
  facebook,
  twitter,
  instagram,
}) => (
  <ul className="block-squared-list block-squared-full-right">
		{ !instagram ? null:
      <li className="block-item">
        <a href="http://instagram.com/" target="_blank" className="block-button">
          <span className="bg bg-inst"></span>
          <span className="icn icon-instagram"></span>
        </a>
      </li>
    }
    { !facebook ? null:
  		<li className="block-item">
        <a href="https://www.facebook.com/" target="_blank" className="block-button">
          <span className="bg bg-fb"></span>
          <span className="icn icon-facebook"></span>
        </a>
      </li>
    }
    { !twitter ? null:
  		<li className="block-item">
        <a href="https://www.twitter.com/" target="_blank" className="block-button">
          <span className="bg bg-tw"></span>
          <span className="icn icon-twitter"></span>
        </a>
      </li>
    }
  </ul>
);

export default ShareActions
