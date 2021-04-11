/** @jsx jsx */
import { GatsbyImage } from 'gatsby-plugin-image';
import { LocalizedLink } from 'gatsby-theme-i18n';
import { Box, Heading, Flex, Card, Text, NavLink, Button, jsx } from 'theme-ui';
import { toPlainText } from '../helpers';

// TODO add localization here

const PostPreview = ({ post }) => {
  const { title, mainImage, language, publishedAt, slug, _rawBody } = post;
  return (
    <Card
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: ['2fr 0.5fr 1fr', null, '2fr 1fr 1fr'],
        gridColumnGap: '10px',
        gridRowGap: '10px',
        padding: 10,
        paddingBottom: 0,
        maxWidth: '500px',
        maxHeight: '550px',
        borderRadius: '10px',
      }}
    >
      <Flex
        sx={{
          flexDirection: ['column', null, 'row'],
          gap: 10,
        }}
      >
        <GatsbyImage
          image={mainImage.asset.gatsbyImageData}
          alt={title}
          sx={{
            width: ['100%', null, '150px'],
            height: ['250px', null, '150px'],
            borderRadius: '10px',
          }}
        />
        <Box>
          <NavLink
            as={LocalizedLink}
            to={`/post/${slug.current}`}
            language={language}
          >
            <Heading sx={{ fontSize: 5, color: 'primary' }}>{title}</Heading>
          </NavLink>
          <h3> {publishedAt}</h3>
        </Box>
      </Flex>
      <Flex
        sx={{
          alignItems: 'flex-start',
          height: '50px',
        }}
      >
        <Text>{`${toPlainText(_rawBody).slice(0, 200)}...`}</Text>
      </Flex>
      <Flex
        sx={{
          alignItems: 'center',
        }}
      >
        <Button
          as={LocalizedLink}
          to={`/post/${slug.current}`}
          language={language}
          sx={{ width: '150px', borderRadius: '10px' }}
        >
          Keep Reading ➜
        </Button>
      </Flex>
    </Card>
  );
};
export default PostPreview;
