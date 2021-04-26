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
        alignItems: 'center',
        justifyContent: 'center',
        py: 20,
      }}
    >
      <BaseStyles>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <h3>{categories.title[lang]}</h3>
        <GatsbyImage
          image={image}
          alt={title}
          sx={{
            filter: colorMode === 'dark' && 'brightness(85%)',
            maxWidth: '65ch',
            maxHeight: '60vh',
          }}
        />
        <PortableText blocks={text} />
        <Divider />
      </BaseStyles>
      <h1> if you liked this article share it</h1>
    </Flex>
  );
};
export default Post;
