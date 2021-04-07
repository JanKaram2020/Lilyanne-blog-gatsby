import { useLocalization } from 'gatsby-theme-i18n';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const blogPage = () => {
  const { locale } = useLocalization();
  return (
    <main style={{ direction: locale === 'ar' ? 'rtl' : 'ltr' }}>
      <SEO />
      <Layout>
        <h1> blogPage</h1>
      </Layout>
    </main>
  );
};
export default blogPage;
