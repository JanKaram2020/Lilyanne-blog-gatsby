import 'normalize.css';
import { useLocalization } from 'gatsby-theme-i18n';
import React from 'react';
import Footer from './Footer';
import Nav from './Nav';

const Layout = ({ children }) => {
  const { locale } = useLocalization();
  return (
    // eslint-disable-next-line react/jsx-pascal-case
    <main style={{ direction: locale === 'ar' ? 'rtl' : 'ltr' }}>
      <Nav locale={locale} />
      <div style={{ margin: '10px' }}>{children}</div>
      <Footer locale={locale} />
    </main>
  );
};
export default Layout;
