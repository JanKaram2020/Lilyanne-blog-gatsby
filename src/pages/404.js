import React from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';

// markup
const NotFoundPage = () => {
  const { t } = useTranslation('404');
  return (
    <main>
      <h1>{t('notFound')}</h1>
      <title>Not found</title>
      <Link to="/">Go home</Link>.
    </main>
  );
};

export default NotFoundPage;
