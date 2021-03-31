import 'normalize.css';
import '../gatsby-plugin-theme-ui/Font.css';
import { useLocalization } from 'gatsby-theme-i18n';
import React from 'react';
import Footer from './Footer';
import Nav from './Nav';

const Layout = ({ children }) => {
  const { locale } = useLocalization();
  return (
    // eslint-disable-next-line react/jsx-pascal-case
    <main style={{ direction: locale === 'ar' ? 'rtl' : 'ltr' }}>
      <Nav />
      <div style={{ margin: '10px' }}>{children}</div>
      <Footer />
    </main>
  );
};
export default Layout;
