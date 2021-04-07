import { useLocalization } from 'gatsby-theme-i18n';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const BlogPage = () => {
  const { locale } = useLocalization();
  const { t } = useTranslation('Nav');
  return (
    <main style={{ direction: locale === 'ar' ? 'rtl' : 'ltr' }}>
      <SEO title={t('blog')} lang={locale} />
      <Layout>
        <h1> blogPage</h1>
      </Layout>
    </main>
  );
};
export default BlogPage;
