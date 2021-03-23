import React from 'react';
import { graphql } from 'gatsby';
import { useLocalization } from 'gatsby-theme-i18n';
import Layout from '../components/Layout';
import Post from '../components/Post';

// markup
const IndexPage = ({ data }) => {
  const { locale } = useLocalization();
  const posts = data.allSanityPost.nodes;
  return (
    <main style={{ direction: locale === 'ar' ? 'rtl' : 'ltr' }}>
      <Layout>
        {posts.map((post, i) => (
          <div key={`${i} ${post._id}`}>
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
          </div>
        ))}
      </Layout>
    </main>
  );
};
export const query = graphql`
  query MyQuery {
    allSanityPost {
      totalCount
      nodes {
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
  }
`;
export default IndexPage;
