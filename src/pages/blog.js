import React from 'react';
import { graphql } from 'gatsby';
import { useLocalization } from 'gatsby-theme-i18n';
import { useTranslation } from 'react-i18next';
import { Flex } from 'theme-ui';
import Layout from '../components/Layout';
import PostPreview from '../components/PostPreview';
import SEO from '../components/Seo';
// TODO consider refactoring all languages to use source form sanity
// markup
const BlogPage = ({ data }) => {
  const { locale } = useLocalization();
  const { t } = useTranslation('Nav');
  const posts = data.allSanityPost.nodes;
  const currentPosts = posts.filter((post) => post.language === locale);
  return (
    <Layout>
      <SEO lang={locale} title={t('blog')} />
      <Flex
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyItems: 'center',
          gap: '10px',
        }}
        as="section"
      >
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
export default BlogPage;
