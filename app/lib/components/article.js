import React from 'react';

const Article = ({imageSource, title, mainText, secondaryText}) => (
  <section className="case-content inverted about-mediamonks-main">
    <header className="case-header">
    	<div className="masthead-item">
    		<figure className="image-wrapper">
    			<span className="img-data-wrap img-big">
            <img alt="About RocketBrains" src={imageSource} />
          </span>
    		</figure>
    	</div>
    </header>

    <article className="case-content-wrap case-intro">
    	<h1 className="case-name heading-02">About</h1>
    	<div className="content">
    		<p>
          {mainText}
    		</p>
    		<p>
    			{secondaryText}
    		</p>
    		<p>
    		</p>
    	</div>
    	<a href="#">
    		<span className="block-button text-bordered" data-bind="" style="border-color: #000">
    				<span className="bg"></span>
    				<span className="text" style="color: #000">Contact Us</span>
    		</span>
    	</a>
    </article>
  </section>
);

export default Article
