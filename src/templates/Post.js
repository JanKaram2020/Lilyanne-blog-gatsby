import { useLocalization } from 'gatsby-theme-i18n';
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Post from '../components/Post';

const PostPage = ({ data }) => {
  console.log(data);
  const post = data.sanityPost;
  const { locale } = useLocalization();
  console.log(post);
  return (
    <main style={{ direction: locale === 'ar' ? 'rtl' : 'ltr' }}>
      <Layout>
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
      </Layout>
    </main>
  );
};
export default PostPage;
export const query = graphql`
  query($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
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
    }
  }
`;
