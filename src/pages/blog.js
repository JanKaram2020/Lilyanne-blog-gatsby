import React from 'react';
import { graphql } from 'gatsby';
import { useLocalization } from 'gatsby-theme-i18n';
import { Flex } from 'theme-ui';
import Layout from '../components/Layout';
import PostPreview from '../components/PostPreview';
import SEO from '../components/Seo';
import { blog as title } from '../translations/Nav.transaltion';
// TODO consider refactoring all languages to use source form sanity
// TODO fix errors here
// markup
const BlogPage = ({ data }) => {
  const { locale } = useLocalization();
  const langPosts = data.allSanityPost.nodes.filter(
    (post) => post.language === locale
  );
  return (
    <Layout>
      <SEO lang={locale} title={title[locale]} />
      <Flex
        variant="flex.center"
        sx={{
          flexDirection: ['column', 'row'],
        }}
        as="section"
      >
        {langPosts.map((post, i) => (
          <PostPreview post={post} key={`${i} ${post._id}`} />
        ))}
      </Flex>
    </Layout>
  );
};
export const query = graphql`
  query BlogQuery {
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
          _id
          title {
            ar
            en
            fr
          }
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
        publishedAt(formatString: "")
      }
    }
    allSanityCategory {
      nodes {
        id
        title {
          ar
          en
          fr
        }
        slug {
          current
        }
      }
    }
  }
`;
export default BlogPage;
