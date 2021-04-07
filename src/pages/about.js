import { useLocalization } from 'gatsby-theme-i18n';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';

const AboutPage = () => {
  const { locale } = useLocalization();
  return (
    <main style={{ direction: locale === 'ar' ? 'rtl' : 'ltr' }}>
      <SEO />
      <Layout>
        <h1> AboutPage</h1>
      </Layout>
    </main>
  );
};
export default AboutPage;
