import { Link } from 'gatsby';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { LocalizedLink, useLocalization } from 'gatsby-theme-i18n';

const Nav = () => {
  const { t } = useTranslation('Nav');
  console.log(t('notFound'));
  return (
    <>
      <Link to="/ar">عربي</Link>
      <Link to="/">English</Link>
      <Link to="/fr">français</Link>
      <br />
      <LocalizedLink to="/">{t('home')}</LocalizedLink>
      <LocalizedLink to="/about">{t('about')}</LocalizedLink>
      <LocalizedLink to="/blog">{t('blog')}</LocalizedLink>
      <LocalizedLink to="/categories">{t('categories')}</LocalizedLink>
      <h1> this is the nav</h1>
    </>
  );
};
export default Nav;
