/** @jsx jsx */
import { BaseStyles, jsx, Divider, useColorMode, Flex } from 'theme-ui';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

import PortableText from './PortableText';

const Post = ({ post, lang }) => {
  const [colorMode] = useColorMode();
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
  console.log(image);
  return (
    <Flex as="article" sx={{ flexDirection: 'column', width: '500px' }}>
      <BaseStyles>
        <h2>{title}</h2>
        <h3>{author}</h3>
        {categories.map((category, i) => (
          <h3 key={i}>{category.title[lang]}</h3>
        ))}
        <GatsbyImage
          image={image}
          alt={title}
          sx={{
            filter: colorMode === 'dark' && 'brightness(85%)',
          }}
        />
        <PortableText blocks={text} />
        <Divider />
      </BaseStyles>
    </Flex>
  );
};
export default Post;
