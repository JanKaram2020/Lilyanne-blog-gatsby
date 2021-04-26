import { useLocalization } from 'gatsby-theme-i18n';
import React from 'react';
import { graphql } from 'gatsby';
import CompleteCheck from '../components/CompleteCheck';
import Layout from '../components/Layout';
import Post from '../components/Post';
import SEO from '../components/Seo';
import { toPlainText } from '../helpers';

const PostPage = ({ data }) => {
  const post = data.sanityPost;
  const { locale } = useLocalization();
  return (
    <>
      <SEO
        lang={locale}
        title={post.title || 'Untitled'}
        description={post.excerpt || toPlainText(post._rawBody)}
        image={post.mainImage.asset.url}
      />
      <Layout>
        <CompleteCheck />
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
      </Layout>
    </>
  );
};
export default PostPage;
export const query = graphql`
  query($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
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
          url
        }
      }
      slug {
        current
      }
      language
      excerpt
    }
  }
`;
