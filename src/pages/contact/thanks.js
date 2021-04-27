import { useLocalization } from 'gatsby-theme-i18n';
import React from 'react';
import { Flex } from 'theme-ui';
import Layout from '../../components/Layout';
import SEO from '../../components/Seo';
import { thanks } from '../../translations/thanks.translation';

const ThanksPage = () => {
  const { locale } = useLocalization();
  return (
    <Layout>
      <SEO title={thanks[locale]} />
      <Flex
        as="section"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1>{thanks[locale]}</h1>
      </Flex>
    </Layout>
  );
};
export default ThanksPage;
