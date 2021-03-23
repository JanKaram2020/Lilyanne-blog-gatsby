import { useLocalization } from 'gatsby-theme-i18n';
import React from 'react';
import Layout from '../components/Layout';

const AboutPage = () => {
  const { locale } = useLocalization();
  return (
    <main style={{ direction: locale === 'ar' ? 'rtl' : 'ltr' }}>
      <Layout>
        <h1> AboutPage</h1>
      </Layout>
    </main>
  );
};
export default AboutPage;
