/** @jsx jsx */
import { GatsbyImage } from 'gatsby-plugin-image';
import { LocalizedLink } from 'gatsby-theme-i18n';
import React from 'react';
import {
  Box,
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

// TODO add localization here

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
      as="article"
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

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          }}
        >
          <NavLink
            as={LocalizedLink}
            to={`/post/${slug.current}`}
            language={language}
          >
            <Heading sx={{ fontSize: 5, color: 'primary' }}>{title}</Heading>
          </NavLink>
          {categories.map((category, i) => (
            <h3 sx={{ margin: 0, padding: 0 }} key={`category key ${i}`}>
              {category ? category.title[language] : ''}
            </h3>
          ))}
          <h3 sx={{ margin: 0, padding: 0 }}> {publishedAt}</h3>
        </Box>
      </Grid>
      <Flex
        sx={{
          alignItems: 'center',
          justifyItems: 'center',
          // height: '50px',
        }}
      >
        <Text>{`${toPlainText(_rawBody).slice(0, 300)}...`}</Text>
      </Flex>
      <Flex>
        <Button
          as={LocalizedLink}
          to={`/post/${slug.current}`}
          language={language}
          sx={{
            width: '180px',
            height: '100%',
            maxHeight: '40px',
            borderRadius: '10px',
          }}
        >
          Keep Reading ➜
        </Button>
      </Flex>
    </Card>
  );
};
export default PostPreview;
