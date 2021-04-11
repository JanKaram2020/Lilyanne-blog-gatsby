import React from 'react';
import { graphql } from 'gatsby';
import { LocalizedLink, useLocalization } from 'gatsby-theme-i18n';
import { Button, Flex, Heading } from 'theme-ui';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import PostPreview from '../components/PostPreview';
import SEO from '../components/Seo';
// TODO consider refactoring all languages to use source form sanity
// markup
const IndexPage = ({ data }) => {
  const { locale } = useLocalization();
  const posts = data.allSanityPost.nodes;
  const currentPosts = posts
    .filter((post) => post.language === locale)
    .slice(0, 4);
  return (
    <Layout>
      <SEO lang={locale} />
      <Hero />
      <Flex
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyItems: 'center',
          gap: '10px',
        }}
        as="section"
      >
        <Heading as="h1" sx={{ textAlign: 'center' }}>
          Latest Stories
        </Heading>
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
        <Button
          as={LocalizedLink}
          to="/blog"
          sx={{ width: '150px', borderRadius: '10px', height: '40px' }}
          variant="secondary"
        >
          See more posts
        </Button>
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
          alt
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
