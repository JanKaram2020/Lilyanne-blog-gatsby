import { graphql } from 'gatsby';
import { useLocalization } from 'gatsby-theme-i18n';
import React from 'react';
import { Card, Flex, Heading, Text } from 'theme-ui';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import { about as title } from '../translations/Nav.transaltion';

const AboutPage = ({ data }) => {
  const { locale } = useLocalization();
  const { aboutPage } = data.site;
  return (
    <main style={{ direction: locale === 'ar' ? 'rtl' : 'ltr' }}>
      <SEO title={title[locale]} lang={locale} />
      <Layout>
        <Flex variant="flex.centerColumn" as="section">
          <Card as="article">
            <Heading as="h1"> {title[locale]}</Heading>
            <Text>{aboutPage[locale]}</Text>
          </Card>
        </Flex>
      </Layout>
    </main>
  );
};
export const query = graphql`
  query AboutPageQuery {
    site: sanitySiteSettings(
      _id: { eq: "4626fe5d-367c-4dcb-932e-6a06f38ba4c8" }
    ) {
      aboutPage {
        ar
        en
        fr
      }
    }
  }
`;
export default AboutPage;
