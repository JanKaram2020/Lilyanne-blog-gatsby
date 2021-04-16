import React from 'react';
import { graphql } from 'gatsby';
import { useLocalization } from 'gatsby-theme-i18n';
import { Flex, Heading } from 'theme-ui';
import Layout from '../components/Layout';
import PostPreview from '../components/PostPreview';
import SEO from '../components/Seo';
// TODO consider refactoring all languages to use source form sanity
// TODO consider adding suggestions for other articles in bottom of an article
// markup
const CategoryPage = ({ data }) => {
  const { locale } = useLocalization();
  const posts = data.allSanityPost.nodes;
  const currentPosts = posts.filter((post) => post.language === locale);
  return (
    <Layout>
      <SEO lang={locale} />
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
          {data.sanityCategory.title[locale]}
        </Heading>
        <Flex
          sx={{
            flexDirection: ['column', 'row'],
            flexWrap: 'wrap',
            gap: '10px',
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          {currentPosts.map((post, i) => (
            <PostPreview post={post} key={`${i} ${post._id}`} />
          ))}
        </Flex>
      </Flex>
    </Layout>
  );
};
export const query = graphql`
  query($slug: String!) {
    sanityCategory(slug: { current: { eq: $slug } }) {
      title {
        ar
        en
        fr
      }
    }
    allSanityPost(
      sort: { fields: [publishedAt], order: DESC }
      filter: {
        slug: { current: { ne: null } }
        publishedAt: { ne: null }
        categories: { slug: { current: { eq: $slug } } }
      }
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
        _id
      }
    }
  }
`;
export default CategoryPage;
