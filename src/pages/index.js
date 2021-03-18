import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { LocalizedLink, LocalesList, useLocalization } from 'gatsby-theme-i18n';
import Layout from '../components/Layout';
import Post from '../components/Post';

// markup
const IndexPage = ({ data }) => {
  const { locale } = useLocalization();
  const posts = data.allSanityPost.nodes;
  const { t } = useTranslation('404');
  return (
    <main>
      <Layout>
        <LocalesList />
        <LocalizedLink to="/404">{t('notFound')}</LocalizedLink>
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
      }
    }
  }
`;
export default IndexPage;
