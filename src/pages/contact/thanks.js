import { useLocalization } from 'gatsby-theme-i18n';
import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/Seo';
import { thanks } from '../../translations/thanks.translation';

const ThanksPage = () => {
  const { locale } = useLocalization();
  return (
    <Layout>
      <SEO title={thanks[locale]} />
      <section>
        <h1>{thanks[locale]}</h1>
      </section>
    </Layout>
  );
};
export default ThanksPage;
