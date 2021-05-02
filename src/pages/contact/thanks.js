import { useLocalization } from 'gatsby-theme-i18n';
import React from 'react';
import { Flex, Heading } from 'theme-ui';
import Layout from '../../components/Layout';
import SEO from '../../components/Seo';
import { thanks } from '../../translations/thanks.translation';

const ThanksPage = () => {
  const { locale } = useLocalization();
  return (
    <Layout>
      <SEO title={thanks[locale]} />
      <Flex variant="flex.centerColumn" as="section">
        <Heading as="h1">{thanks[locale]}</Heading>
      </Flex>
    </Layout>
  );
};
export default ThanksPage;
