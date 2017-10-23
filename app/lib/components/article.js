import React from 'react';
import '../../scss/article.scss';
import '../../scss/sectionPage.scss';

const Article = ({
  style,
  title,
  onClick,
  children,
  className,
  buttonText,
  imageSource,
  withLinkButton,
  imageOverlayText,
  articleClassName,
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
            </span>
      		</figure>
      	</div>
      </header>

      <article className={`case-content-wrap case-intro ${articleClassName || ''}`}>
      	<h1 className='case-name heading-02'>{title}</h1>
      	<div className='content'>
      		{children}
      	</div>
        { withClickableButton &&
        	<a onClick={onClick}>
        		<span className='block-button text-bordered' style={{borderColor: '#000'}}>
        				<span className='bg'></span>
        				<span className='text' style={{color: '#000'}}>{buttonText}</span>
        		</span>
        	</a>
        }
        { withLinkButton &&
          <a href=''>
        		<span className='block-button text-bordered' style={{borderColor: '#000'}}>
        				<span className='bg'></span>
        				<span className='text' style={{color: '#000'}}>{buttonText}</span>
        		</span>
        	</a>
        }
      </article>
    </section>
  </div>
);

export default Article
