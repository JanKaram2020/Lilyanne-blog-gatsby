/** @jsx jsx */
import {
  BaseStyles,
  jsx,
  Divider,
  useColorMode,
  Flex,
  Heading,
} from 'theme-ui';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import PortableText from './PortableText';
import { share } from '../translations/Post.translation';

const Post = ({ post }) => {
  const lang = post.language;
  const [colorMode] = useColorMode();
  const text = post._rawBody;
  const { categories } = post;
  const { title } = post;
  const image = getImage(post.mainImage.asset);
  return (
    <Flex variant="flex.centerColumn" as="section">
      <BaseStyles>
        <Heading variant="h1" as="h1">
          {title}
        </Heading>
        <Heading variant="h3" as="h3">
          {categories.title[lang]}
        </Heading>
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
      <Heading variant="h3" as="h3">
        {share[lang]}
      </Heading>
    </Flex>
  );
};
export default Post;
