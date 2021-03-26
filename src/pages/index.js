/** @jsx jsx */
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { graphql } from 'gatsby';
import { useLocalization } from 'gatsby-theme-i18n';
import { Grid, Flex, Box, jsx, useColorMode } from 'theme-ui';
import Hero from '../components/Hero';
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
      <Hero />
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
