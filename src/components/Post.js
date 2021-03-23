/** @jsx jsx */
import React from 'react';
import { BaseStyles, jsx, Divider } from 'theme-ui';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

import PortableText from './PortableText';

const Post = ({ post, lang }) => {
  let text;
  if (lang === 'en') {
    text = post.body._rawEn;
  } else if (lang === 'ar') {
    text = post.body._rawAr;
  } else {
    text = post.body._rawFr;
  }
  const { categories } = post;
  const title = post.title[lang];
  const author = post.author.name[lang];
  console.log(post.mainImage.asset);
  const image = getImage(post.mainImage.asset);
  return (
    <BaseStyles>
      <article>
        <h2>{title}</h2>
        <h3>{author}</h3>
        {categories.map((category, i) => (
          <h3 key={i}>{category.title[lang]}</h3>
        ))}
        <GatsbyImage image={image} alt={title} />
        <PortableText blocks={text} />
      </article>
      <Divider />
    </BaseStyles>
  );
};
export default Post;
