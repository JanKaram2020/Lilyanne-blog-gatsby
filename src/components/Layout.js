/** @jsx jsx */
import 'normalize.css';
import { useLocalization } from 'gatsby-theme-i18n';
import React from 'react';
import { jsx, Styled } from 'theme-ui';
import Footer from './Footer';
import Nav from './Nav';

const Layout = ({ children }) => {
  const { locale } = useLocalization();
  return (
    // eslint-disable-next-line react/jsx-pascal-case
    <main style={{ direction: locale === 'ar' ? 'rtl' : 'ltr' }}>
      <Nav />
      {children}
      <Footer />
    </main>
  );
};
export default Layout;
