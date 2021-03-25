/** @jsx jsx */
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { graphql } from 'gatsby';
import { useLocalization } from 'gatsby-theme-i18n';
import { Grid, Flex, Box, jsx, useColorMode } from 'theme-ui';
import Layout from '../components/Layout';
import Post from '../components/Post';

// markup
const IndexPage = ({ data }) => {
  const { locale } = useLocalization();
  const [colorMode] = useColorMode();
  const dark = colorMode === 'dark';
  console.log(dark);
  const posts = data.allSanityPost.nodes;
  return (
    <Layout>
      <Grid
        sx={{
          boxSizing: 'border-box',
          display: 'grid',
          gridTemplateColumns: ['1fr', '1fr 1fr'],
          gridTemplateRows: '1fr',
          height: '88vh',
        }}
      >
        {/* first box image will cover the whole grid area */}

        <StaticImage
          src="https://files.elfann.com/imagine/pictures_728_400/1410177968_1512471_10152201219780947_6802410849237570943_n.jpg"
          alt="Lilyanne Hany"
          layout="fullWidth"
          sx={{ gridArea: ['1/1/1/1', '1 / 1 / 2 / 3'] }}
        />

        {/* second box gradient will cover the whole grid area */}
        <Box
          sx={{
            gridArea: ['1 / 1 / 1 / 1', '1 / 1 / 2 / 3'],
            zIndex: 2,
            maxWidth: '100%',
            background: `linear-gradient(90deg,${
              dark ? '#33ccff70' : '#ff613c7a'
            } 30%,rgba(255,255,255,0) 100%)`,
          }}
        />
        {/* third box gradient will cover the whole grid area */}

        <Box
          sx={{
            gridArea: ['1/1/2/3', '1/1/2/3', '1/1/2/2', '1/1/2/2'],
            zIndex: 3,
          }}
        >
          <StaticImage
            src="https://files.elfann.com/imagine/pictures_728_400/1410177968_1512471_10152201219780947_6802410849237570943_n.jpg"
            alt="Lilyanne Hany"
            placeholder="blurred"
            layout="fixed"
            style={{ width: '100%', height: '100%' }}
          />
        </Box>
      </Grid>
      {posts.map((post, i) => (
        <Flex
          key={`${i} ${post._id}`}
          sx={{
            flexDirection: ['column', 'row'],
          }}
        >
          {locale === 'fr' && post.body._rawFr ? (
            <Post post={post} lang="fr" />
          ) : (
            ''
          )}
          {locale === 'en' && post.body._rawEn ? (
            <Post post={post} lang="en" />
          ) : (
            ''
          )}
          {locale === 'ar' && post.body._rawAr ? (
            <Post post={post} lang="ar" />
          ) : (
            ''
          )}
        </Flex>
      ))}
    </Layout>
  );
};
export const query = graphql`
  query MyQuery {
    allSanityPost {
      totalCount
      nodes {
        body {
          _rawEn
          _rawAr
          _rawFr
        }
        author {
          name {
            ar
            en
            fr
          }
        }
        categories {
          title {
            ar
            en
            fr
          }
        }
        title {
          ar
          en
          fr
        }
        mainImage {
          asset {
            gatsbyImageData(
              width: 900
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;
export default IndexPage;
