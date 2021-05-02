import React from 'react';
import { graphql } from 'gatsby';
import { useLocalization } from 'gatsby-theme-i18n';
import { Flex, Heading, Text } from 'theme-ui';
import Layout from '../components/Layout';
import PostPreview from '../components/PostPreview';
import SEO from '../components/Seo';

const CategoryPage = ({ data }) => {
  const { locale } = useLocalization();
  const posts = data.allSanityPost.nodes;
  const category = data.sanityCategory;
  const currentPosts = posts.filter((post) => post.language === locale);
  return (
    <Layout>
      <SEO lang={locale} />
      <Flex variant="flex.centerColumn" as="section">
        <Heading as="h1" sx={{ textAlign: 'center' }}>
          {category.title[locale]}
        </Heading>
        <Text> {category.description[locale]}</Text>
        <Flex
          variant="flex.centerColumn"
          sx={{
            flexDirection: ['column', 'row'],
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
      description {
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
        categories {
          slug {
            current
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
