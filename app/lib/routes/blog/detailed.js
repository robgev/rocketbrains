import React from 'react';
import Layout from 'components/layout';
import Article from 'components/article';
import { getFollowingItems } from 'utils'
import data from './data';

import 'scss/blogPost.scss';

const DetailedBlogPost = ({ match }) => {
  const { postID } = match.params;
  const currentItem = data.find(post => post.id === postID);
  const followingItems = getFollowingItems(data, currentItem);
  const { title, imageSource, alt } = currentItem;
  return (
    <Layout>
      <Article
        title={title}
        withShareActions
        withRouteButtons
        buttonText='Contact us'
        imageSource={imageSource}
        followingItems={followingItems}
        className='blog-article-wrapper'
        articleClassName='blog-study-article'
      >
        <p style={{paddingBottom: '10px'}}>
          This SEO strategy found success by gaining a stark understanding of the business
          model for PlushCare and what the competitive landscape is like in this industry.
          Through pinpointing competitive gaps in content that align with the
          PlushCare product offering, Power Digital Marketing was able to help the
          PlushCare blog break through to new, never achieved heights when it came
          to Organic Search.
        </p>
        <p style={{paddingBottom: '10px'}}>
          When beginning this campaign in October 2016, the original strategy scope intent
          was to improve rankings to the Urgent Care resource pages for all of the top cities
          that are listed on PlushCare.com. After further analysis of the landscape
          in this industry, the Power Digital Marketing team decided to focus efforts around
          the ailments that PlushCare can provide service for.
        </p>
        <p style={{paddingBottom: '10px'}}>
          Although this may seem counter-intuitive since the competition in the medical
          industry is very high, both teams had high confidence that the organic channel
          could grow through blog articles addressing highly-searched and relevant
          questions related to the various ailments.
        </p>
        <p style={{paddingBottom: '10px'}}>
          Power Digital deployed what has been coined as a “content cluster strategy”
          in which a web of internal links is distributed amongst related blog articles as
          well as linking to the specific treatment marketing page to convert readers into
          patients. The blog articles were written from a stringent SEO-first perspective
          and optimized to ensure our written copy dives deep enough into each topic.
        </p>
        <p style={{paddingBottom: '50px'}}>
          Throughout the campaign, Power Digital Marketing also deployed a link earning
          campaign to promote and earn backlinks to our blog articles and relevant
          marketing pages. There was an even focus between on-page and off-page elements throughout
          the entirety of this campaign, which played a huge role in the overall Organic success.
        </p>
      </Article>
    </Layout>
  )
};

export default DetailedBlogPost
