import { LocalizedLink, useLocalization } from 'gatsby-theme-i18n';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'theme-ui';
import Layout from '../components/Layout';

// markup
const NotFoundPage = () => {
  const { locale } = useLocalization();
  const { t } = useTranslation('404');
  return (
    <main style={{ direction: locale === 'ar' ? 'rtl' : 'ltr' }}>
      <Layout>
        <h1>{t('notFound')}</h1>
        <NavLink as={LocalizedLink} to="/">
          {t('home')}
        </NavLink>
      </Layout>
    </main>
  );
};

export default NotFoundPage;
