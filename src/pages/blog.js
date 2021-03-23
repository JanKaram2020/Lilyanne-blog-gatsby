import { useLocalization } from 'gatsby-theme-i18n';
import React from 'react';
import Layout from '../components/Layout';

const blogPage = () => {
  const { locale } = useLocalization();
  return (
    <main style={{ direction: locale === 'ar' ? 'rtl' : 'ltr' }}>
      <Layout>
        <h1> blogPage</h1>
      </Layout>
    </main>
  );
};
export default blogPage;
