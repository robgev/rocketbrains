import React from 'react';
import '../../scss/article.scss';

const Article = props => (
  <div className="view view-static" style={props.style}>
    <section className="case-content inverted about-mediamonks-main">
      <header className="case-header">
      	<div className="masthead-item">
      		<figure className="image-wrapper">
      			<span className="img-data-wrap img-big">
              <img alt="Couldn't load image" src={props.imageSource} />
            </span>
      		</figure>
      	</div>
      </header>

      <article className="case-content-wrap case-intro">
      	<h1 className="case-name heading-02">{props.title}</h1>
      	<div className="content">
      		{props.children}
      	</div>
      	<a href="#">
      		<span className="block-button text-bordered" data-bind="" style={{borderColor: '#000'}}>
      				<span className="bg"></span>
      				<span className="text" style={{color: '#000'}}>Contact Us</span>
      		</span>
      	</a>
      </article>
    </section>
  </div>
);

export default Article
