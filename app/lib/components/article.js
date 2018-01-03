import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import 'scss/article.scss';
import 'scss/sectionPage.scss';
import Statistics from './statistics';
import ShareActions from './shareActions';
import ScrollHint from './scrollHint';

class Article extends PureComponent {
  // There are three states for over
  // 0 - not over buttons, 1 - over prev button, 2 - over next button
  state = {
    over: 0,
  }

  onNextMouseEnter = () => { this.setState({ over: 2 }); }
  onPrevMouseEnter = () => { this.setState({ over: 1 }); }
  onMouseLeave = () => { this.setState({ over: 0 }); }

  render() {
    const {
      style,
      title,
      onClick,
      children,
      className,
      buttonText,
      buttonLink,
      scrollColor,
      imageSource,
      statisticsData,
      withStatistics,
      withLinkButton,
      followingItems,
      articleClassName,
      imageOverlayText,
      withShareActions,
      withRouteButtons,
      withClickableButton,
    } = this.props
    const { over } = this.state;
    return (
      <div className={`view view-static ${className || ''}`} style={style}>
        <section className='case-content inverted'>
          <header className='case-header'>
          	<div className={`masthead-item ${over ? 'over' : ''}`}>
          		<figure className='image-wrapper'>
          			<span className='img-data-wrap img-big'>
                  <img
                    src={imageSource}
                    alt={`Couldn't load the image`}
                    className={`case-header-image ${over ? 'over' : ''}`}
                  />
                  { !imageOverlayText ? null :
                    <h1
                      className={`case-name heading-02 image-overlay-text ${over ? 'header-shift-right' : ''}`}
                    >
                      {imageOverlayText}
                    </h1>
                  }
                </span>
          		</figure>
          	</div>
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
            { withRouteButtons &&
              <div className='buttons-container'>
                <Link
                  key='button-prev'
                  className='slide-btn prev'
                  to={followingItems.prevItem.link}
                  onMouseLeave={this.onMouseLeave}
                  onMouseEnter={this.onPrevMouseEnter}
                >
                  <i className='fa fa-angle-left' aria-hidden='true'></i>
                </Link>
                <Link
                  key='button-next'
                  className='slide-btn next'
                  to={followingItems.nextItem.link}
                  onMouseLeave={this.onMouseLeave}
                  onMouseEnter={this.onNextMouseEnter}
                >
                  <i className='fa fa-angle-right' aria-hidden='true'></i>
                </Link>
                <div className={`slider-block ${over ? 'over' : ''}`}>
                  <span className='title'>{ over === 1 ? 'Prev' : 'Next'}</span>
                  <span className='name'>
                    { over === 1 ?
                      followingItems.prevItem.title :
                      followingItems.nextItem.title
                    }
                  </span>
                </div>
              </div>
            }
            <ScrollHint color={scrollColor} />
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
  }
}
export default Article
