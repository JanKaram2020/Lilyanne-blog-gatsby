import { useLocalization } from 'gatsby-theme-i18n';
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
  return (
    <main style={{ direction: locale === 'ar' ? 'rtl' : 'ltr' }}>
      <Layout>
        {locale === 'fr' && post.body._rawFr ? (
          <Post post={post} lang="fr" />
        ) : (
          ''
        )}
        {locale === 'fr' && post.body._rawFr === null ? (
          <h1>French is not avaliable yet</h1>
        ) : (
          ''
        )}
        {locale === 'en' && post.body._rawEn ? (
          <Post post={post} lang="en" />
        ) : (
          ''
        )}
        {locale === 'en' && post.body._rawEn === null ? (
          <h1>English is not avaliable yet</h1>
        ) : (
          ''
        )}
        {locale === 'ar' && post.body._rawAr ? (
          <Post post={post} lang="ar" />
        ) : (
          ''
        )}
        {locale === 'ar' && post.body._rawAr === null ? (
          <h1>النسخة العربية غير متوفرة</h1>
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
      mainImage {
        asset {
          gatsbyImageData(
            width: 900
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
`;
