import { useLocalization, LocalizedLink } from 'gatsby-theme-i18n';
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Post from '../components/Post';

const PostPage = ({ data, slug }) => {
  console.log(data);
  console.log(slug);
  const post = data.sanityPost;
  const { locale } = useLocalization();
  console.log(post);
  console.log(process.env.GATSBY_LOCALE);
  return (
    <main style={{ direction: locale === 'ar' ? 'rtl' : 'ltr' }}>
      <Layout>
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
    </main>
  );
};
export default PostPage;
export const query = graphql`
  query($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
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
`;
