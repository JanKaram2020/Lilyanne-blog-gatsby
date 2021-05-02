import { LocalizedLink, useLocalization } from 'gatsby-theme-i18n';
import React from 'react';
import { NavLink, Flex } from 'theme-ui';
import Layout from '../components/Layout';
import { Icon } from '../components/LogoSvg';
import SEO from '../components/Seo';
import { notFound, home } from '../translations/Nav.transaltion';
// markup
const NotFoundPage = () => {
  const { locale } = useLocalization();
  return (
    <main style={{ direction: locale === 'ar' ? 'rtl' : 'ltr' }}>
      <SEO title={notFound[locale]} lang={locale} />
      <Layout>
        <Flex variant="flex.centerColumn">
          <Icon style={{ maxWidth: '500px' }} />
          <h1>{notFound[locale]}</h1>
          <NavLink as={LocalizedLink} to="/">
            {home[locale]}
          </NavLink>
        </Flex>
      </Layout>
    </main>
  );
};

export default NotFoundPage;
