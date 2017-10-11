import React from 'react';
import { Link } from 'react-router-dom';
import SVG from '../assets/logo';
import Globe from '../assets/language';

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
]

const hideLogoThreshold = 19; //px
const showBottomBorderThreshold = 76  ; //px

const Header = ({ scrollTop }) => (
  <header className={`main-header ${scrollTop > hideLogoThreshold ? 'logo-hidden' : ''}`}>
  	<h1 className="main-logo mobile" href="#">
  		<div className="logo-mm">
        <SVG />
      </div>
  	</h1>
  	<nav className={`main-nav ${scrollTop > showBottomBorderThreshold ? 'sticky' : ''}`} role="navigation">
  		<div className="main-side-nav">
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
              <li key={`MainMenuItem-${idx}`}><Link to={item.toLowerCase()}>{item}</Link></li>
            ))}
            <li>
              <Link to="#">
                <Globe />
              </Link>
            </li>
  				</ul>

  			<div className="scroll-menu-wrap">
  				<ul className="scroll-menu">
            {mobileMenuItems.map((item, idx) => (
              <li key={`MobileMenu-${idx}`}><Link to="#">{item}</Link></li>
            ))}
  				</ul>
  			</div>
  		</div>

  		<span className="small-nav icon-mobile-nav"></span>
  	</nav>
  </header>
);

export default Header
