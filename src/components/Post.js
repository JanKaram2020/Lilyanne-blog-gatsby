/** @jsx jsx */
import { LocalizedLink } from 'gatsby-theme-i18n';
import { BaseStyles, jsx, Divider, useColorMode, Flex } from 'theme-ui';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

import PortableText from './PortableText';

const Post = ({ post }) => {
  const lang = post.language;
  const [colorMode] = useColorMode();
  const text = post._rawBody;
  const { categories } = post;
  const { title } = post;
  const author = post.author.name[lang];
  const image = getImage(post.mainImage.asset);
  return (
    <Flex
      as="article"
      sx={{
        flexDirection: 'column',
        maxWidth: '500px',
        py: 20,
        mx: 20,
      }}
    >
      <BaseStyles>
        <LocalizedLink to={`/post/${post.slug.current}`}>
          {post.slug.current}
        </LocalizedLink>
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
