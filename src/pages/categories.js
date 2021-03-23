import { useLocalization } from 'gatsby-theme-i18n';
import React from 'react';
import Layout from '../components/Layout';

const CategoriesPage = () => {
  const { locale } = useLocalization();
  return (
    <main style={{ direction: locale === 'ar' ? 'rtl' : 'ltr' }}>
      <Layout>
        <h1> CategoriesPage</h1>
      </Layout>
    </main>
  );
};

export default CategoriesPage;
