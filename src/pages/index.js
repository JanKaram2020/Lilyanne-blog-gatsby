import React from 'react';
import { graphql } from 'gatsby';
import { useLocalization } from 'gatsby-theme-i18n';
import { Flex } from 'theme-ui';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Post from '../components/Post';

// markup
const IndexPage = ({ data }) => {
  const { locale } = useLocalization();
  const posts = data.allSanityPost.nodes;
  return (
    <Layout>
      <Hero />
      <Flex
        sx={{
          flexDirection: ['column', 'row'],
          flexWrap: 'wrap',
        }}
      >
        {posts.map((post, i) => (
          <Flex key={`${i} ${post._id}`}>
            {locale === 'fr' && post.language === 'fr' ? (
              <Post post={post} lang="fr" />
            ) : (
              ''
            )}
            {locale === 'en' && post.language === 'en' ? (
              <Post post={post} lang="en" />
            ) : (
              ''
            )}
            {locale === 'ar' && post.language === 'ar' ? (
              <Post post={post} lang="ar" />
            ) : (
              ''
            )}
          </Flex>
        ))}
      </Flex>
    </Layout>
  );
};
export const query = graphql`
  query PostsQuery {
    allSanityPost(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      totalCount
      nodes {
        _rawBody
        body {
          _rawChildren
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
        title
        mainImage {
          asset {
            gatsbyImageData(
              width: 900
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        slug {
          current
        }
        language
      }
    }
  }
`;
export default IndexPage;
