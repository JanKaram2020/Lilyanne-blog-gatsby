/** @jsx jsx */
import { GatsbyImage } from 'gatsby-plugin-image';
import { LocalizedLink } from 'gatsby-theme-i18n';
import {
  Grid,
  Heading,
  Flex,
  Card,
  Text,
  NavLink,
  Button,
  jsx,
  useColorMode,
} from 'theme-ui';
import { toPlainText } from '../helpers';
import { keep } from '../translations/PostPreview.translation';

const PostPreview = ({ post }) => {
  const {
    title,
    mainImage,
    language,
    publishedAt,
    slug,
    _rawBody,
    categories,
  } = post;
  const [colorMode] = useColorMode();

  return (
    <Card
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: ['2fr 0.5fr 0.5fr', null, '2fr 1fr 0.5fr'],
        gap: '10px',
        padding: 10,
        paddingBottom: 0,
        maxWidth: '500px',
        maxHeight: '695px',
        borderRadius: '10px',
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ opacity: 1, scale: [0, 1.5, 1] }}
      exit={{ opacity: 0 }}
    >
      <Grid
        sx={{
          gridTemplateColumns: ['1fr', '1fr 1fr'],
          gap: '10px',
        }}
      >
        <GatsbyImage
          image={mainImage.asset.gatsbyImageData}
          alt={mainImage.alt ? mainImage.alt : title}
          sx={{
            height: ['250px', null, '240px'],
            borderRadius: '10px',
            filter: colorMode === 'dark' && 'brightness(85%)',
          }}
        />

        <Flex
          sx={{
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            gap: '10px',
          }}
        >
          <NavLink
            as={LocalizedLink}
            to={`/blog/post/${slug.current}`}
            language={language}
          >
            <Heading sx={{ fontSize: 5, color: 'primary' }}>{title}</Heading>
          </NavLink>
          {categories && (
            <h3 sx={{ margin: 0, padding: 0 }}>{categories.title[language]}</h3>
          )}
          <h3 sx={{ margin: 0, padding: 0 }}> {publishedAt}</h3>
        </Flex>
      </Grid>
      <Flex
        sx={{
          alignItems: 'center',
          justifyItems: 'center',
        }}
      >
        <Text>{`${toPlainText(_rawBody).slice(0, 300)}...`}</Text>
      </Flex>
      <Flex>
        <Button
          as={LocalizedLink}
          to={`/blog/post/${slug.current}`}
          language={language}
        >
          {keep[language]}
        </Button>
      </Flex>
    </Card>
  );
};
export default PostPreview;
