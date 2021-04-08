import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { graphql } from 'gatsby';
import { useLocalization, LocalizedLink } from 'gatsby-theme-i18n';
import { Flex, Card, Text, Heading } from 'theme-ui';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import PostPreview from '../components/PostPreview';
import SEO from '../components/Seo';
import { toPlainText } from '../helpers';
// TODO consider refactoring all languages to use source form sanity
// markup
const IndexPage = ({ data }) => {
  const { locale } = useLocalization();
  const posts = data.allSanityPost.nodes;
  const currentPosts = posts.filter((post) => post.language === locale);
  return (
    <Layout>
      <SEO lang={locale} />
      <Hero />
      <Heading as="h1">Latest Stories</Heading>
      <Flex
        sx={{
          flexDirection: ['column', 'row'],
          flexWrap: 'wrap',
          gap: ['10px', '20px', '30px'],
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        {currentPosts.map((post, i) => (
          <PostPreview post={post} key={`${i} ${post._id}`} />
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
        publishedAt(formatString: "Do MM YYYY, h:mm a")
      }
    }
  }
`;
export default IndexPage;
