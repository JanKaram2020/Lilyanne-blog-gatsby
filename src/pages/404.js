import { LocalizedLink, useLocalization } from 'gatsby-theme-i18n';
import React from 'react';
import { NavLink } from 'theme-ui';
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
        <Icon />
        <h1>{notFound[locale]}</h1>
        <NavLink as={LocalizedLink} to="/">
          {home[locale]}
        </NavLink>
      </Layout>
    </main>
  );
};

export default NotFoundPage;
