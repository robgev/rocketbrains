import React from 'react';
import SVG from './logo';

import '../../scss/header.scss';

const mobileMenuItems = [
  'Web Development',
  'Mobile Apps',
  'Desktop & Web Apps',
  'Digital Marketing',
  'Graphic Design',
  'Animation',
]

const topBarItems = [
  'Home',
  'About',
  'Careers',
  'Contacts',
  'Blog',
  'Icon',
]

const hideLogoThreshold = 19; //px
const showBottomBorderThreshold = 100; //px

const Header = ({ scrollTop }) => (
  <header className={`main-header ${scrollTop > hideLogoThreshold ? 'logo-hidden' : ''}`}>
  	<h1 className="main-logo mobile" href="#">
  		<div className="logo-mm">
        <SVG />
      </div>
  	</h1>
  	<nav className={`main-nav ${scrollTop > showBottomBorderThreshold ? 'sticky' : ''}`} role="navigation">
  		<div className="main-side-nav" style={{}}>
  			<div className="head">
  				<span className="icon-cross"></span>
  				<h1 className="main-logo" href="#">
  					<div className="logo-mm">
              <SVG />
            </div>
  				</h1>
  			</div>

  			<div className="grid-logo-container hide">
  				<div className="toggle-menu" href="#">
  					<div className="top">
              {topBarItems.map((item, idx) => (
                <span key={`HeaderTop-${idx}`}></span>
              ))}
  					</div>
  					<div className="bottom">
              {topBarItems.map((item, idx) => (
                <span key={`HeaderBottom-${idx}`}></span>
              ))}
  					</div>
  				</div>
  			</div>
  				<ul className="main-menu">
  					{topBarItems.map((item, idx) => (
              <li key={`MainMenuItem-${idx}`}><a href="#">{item}</a></li>
            ))}
  				</ul>

  			<div className="scroll-menu-wrap">
  				<ul className="scroll-menu">
            {mobileMenuItems.map((item, idx) => (
              <li key={`MobileMenu-${idx}`}><a href="">{item}</a></li>
            ))}
  				</ul>
  			</div>
  		</div>

  		<span className="small-nav icon-mobile-nav"></span>
  	</nav>
  </header>
);

export default Header
