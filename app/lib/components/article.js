import React from 'react';
import { Link } from 'react-router-dom';
import 'scss/article.scss';
import 'scss/sectionPage.scss';
import Statistics from './statistics';
import ShareActions from './shareActions';

const Article = ({
  style,
  title,
  onClick,
  children,
  className,
  routeLinks,
  buttonText,
  buttonLink,
  imageSource,
  statisticsData,
  withStatistics,
  withLinkButton,
  articleClassName,
  imageOverlayText,
  withShareActions,
  withRouteButtons,
  withClickableButton,
}) => (
  <div className={`view view-static ${className || ''}`} style={style}>
    <section className='case-content inverted about-mediamonks-main'>
      <header className='case-header'>
      	<div className='masthead-item'>
      		<figure className='image-wrapper'>
      			<span className='img-data-wrap img-big'>
              <img alt={'Couldn\'t load the image'} src={imageSource} />
              { !imageOverlayText ? null :
                <h1 className='case-name heading-02 image-overlay-text'>{imageOverlayText}</h1>
              }
              { !withRouteButtons ? null : [
                  <Link
                    key='button-prev'
                    className='slide-btn prev'
                    to={routeLinks.prevItemLink}
                  >
                    <i className='fa fa-angle-left' aria-hidden='true'></i>
                  </Link>,
                  <Link
                    key='button-next'
                    className='slide-btn next'
                    to={routeLinks.nextItemLink}
                  >
                    <i className='fa fa-angle-right' aria-hidden='true'></i>
                  </Link>
                ]
              }
              { !withShareActions ? null :
                  <div className='share-actions-wrapper'>
                    <a className="block-button text-bordered share-button">
                      <span className="bg"></span>
                      <span className="text">Share</span>
                    </a>
                    <ShareActions
                      twitter
                      facebook
                    />
                  </div>
              }
            </span>
      		</figure>
      	</div>
      </header>

      <article className={`case-content-wrap case-intro ${articleClassName || ''}`}>
      	<h1 className='case-name heading-02'>{title}</h1>
      	<div className='content'>
      		{children}
      	</div>
        { withStatistics &&
          <Statistics
            data={statisticsData}
          />
        }
        { withClickableButton &&
        	<a onClick={onClick}>
        		<span className='block-button text-bordered' style={{borderColor: '#000'}}>
        				<span className='bg'></span>
        				<span className='text' style={{color: '#000'}}>{buttonText}</span>
        		</span>
        	</a>
        }
        { withLinkButton &&
          <Link to={buttonLink}>
        		<span className='block-button text-bordered' style={{borderColor: '#000'}}>
        				<span className='bg'></span>
        				<span className='text' style={{color: '#000'}}>{buttonText}</span>
        		</span>
        	</Link>
        }
      </article>
    </section>
  </div>
);

export default Article
