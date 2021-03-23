import { useLocalization } from 'gatsby-theme-i18n';
import React from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout';

// markup
const NotFoundPage = () => {
  const { locale } = useLocalization();
  const { t } = useTranslation('404');
  return (
    <main style={{ direction: locale === 'ar' ? 'rtl' : 'ltr' }}>
      <Layout>
        <h1>{t('notFound')}</h1>
        <title>Not found</title>
        <Link to="/">Go home</Link>.
      </Layout>
    </main>
  );
};

export default NotFoundPage;
