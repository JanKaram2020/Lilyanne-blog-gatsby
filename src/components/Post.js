/** @jsx jsx */
import React from 'react';
import { BaseStyles, jsx, Divider } from 'theme-ui';

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
  if (lang === 'ar') {
    return (
      <BaseStyles>
        <article>
          <h1>البوست ده بالعربي</h1>
          <h2> العنوان هو {title}</h2>
          <h3>{author}</h3>
          {categories.map((category, i) => (
            <h3 key={i}>{category.title[lang]}</h3>
          ))}
          <PortableText blocks={text} />
          <Divider />
        </article>
      </BaseStyles>
    );
  }
  return (
    <BaseStyles>
      <article>
        <h1> this post in {lang}</h1>
        <h2> English title is {title}</h2>
        <h3>
          {author} {post.categories[0].title[lang]}
        </h3>
        {categories.map((category, i) => (
          <h3 key={i}>{category.title[lang]}</h3>
        ))}
        <PortableText blocks={text} />
      </article>
      <Divider />
    </BaseStyles>
  );
};
export default Post;
