/** @jsx jsx */
import { GatsbyImage } from 'gatsby-plugin-image';
import { LocalizedLink } from 'gatsby-theme-i18n';
import { Box, Heading, Flex, Card, Text, NavLink, Button, jsx } from 'theme-ui';
import { toPlainText } from '../helpers';

// TODO add localization here

const PostPreview = ({ post }) => {
  console.log(post);
  return (
    <Card
      sx={{
        padding: 10,
        maxWidth: '500px',
        display: 'flex',
        gap: '10px',
        flexDirection: 'column',
      }}
    >
      <Flex sx={{ flexDirection: ['column', 'column', 'row'], gap: 10 }}>
        <GatsbyImage
          image={post.mainImage.asset.gatsbyImageData}
          alt={post.title}
          sx={{
            maxWidth: ['100%', '150px'],
            maxHeight: '250px',
            borderRadius: '10px',
          }}
        />
        <Box>
          <NavLink
            as={LocalizedLink}
            to={`/post/${post.slug.current}`}
            language={post.language}
          >
            <Heading sx={{ fontSize: 5, color: 'primary' }}>
              {post.title}
            </Heading>
          </NavLink>
          <h3> {post.publishedAt}</h3>
        </Box>
      </Flex>
      <Flex sx={{ flexDirection: 'column', gap: '10px' }}>
        <Text>{`${toPlainText(post._rawBody).slice(0, 200)}...`}</Text>
        <Button
          as={LocalizedLink}
          to={`/post/${post.slug.current}`}
          language={post.language}
          sx={{ margin: '10px', width: '60%' }}
        >
          Keep Reading ➜
        </Button>
      </Flex>
    </Card>
  );
};
export default PostPreview;
