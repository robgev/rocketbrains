import React from 'react';
import 'scss/article.scss';
import 'scss/sectionPage.scss';
import ScrollHint from './scrollHint';

const SectionPage = ({
  style,
  title,
  onClick,
  children,
  className,
  buttonText,
  videoSource,
  imageSource,
  withLinkButton,
  imageOverlayText,
  articleClassName,
  withClickableButton,
}) => (
  <div className={`view view-static ${className || ''}`} style={style}>
    <section className='case-content '>
      <header className='case-header'>
      	<div className='masthead-item' style={{ height: '70vh' }}>
      		<figure className='image-wrapper'>
      			<span className='img-data-wrap img-big'>
              { videoSource ?
                <video
                  loop
                  muted
                  autoPlay
                  playsInline
                  poster={imageSource}
                >
                  <source src={`${videoSource}.webm`} type="video/webm" />
                  <source src={`${videoSource}.mp4`} type="video/mp4" />
                  Sorry, your browser does not support videos.
                </video> :
                <img alt={'Couldn\'t load the image'} src={imageSource} />
              }
              { !imageOverlayText ? null :
                <h1 className='case-name heading-02 image-overlay-text'>{imageOverlayText}</h1>
              }
            </span>
      		</figure>
      	</div>
        <ScrollHint top='50vh' />
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
