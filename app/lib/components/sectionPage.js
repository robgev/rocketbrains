import React from 'react';
import 'scss/article.scss';

const SectionPage = ({
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
    <section className='case-content about-mediamonks-main'>
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
      </article>
    </section>
  </div>
);

export default SectionPage
