import 'normalize.css';
import { useLocalization } from 'gatsby-theme-i18n';
import React from 'react';
import BottomNav from './BottomNav';
import Footer from './Footer';
import TopNav from './TopNav';
import { useScrollDirection } from '../helpers';

const Layout = ({ children }) => {
  const { locale } = useLocalization();
  const dir = useScrollDirection();
  console.log(dir);
  return (
    // eslint-disable-next-line react/jsx-pascal-case
    <main style={{ direction: locale === 'ar' ? 'rtl' : 'ltr' }}>
      <TopNav locale={locale} />
      <div style={{ margin: '10px' }}>{children}</div>
      <Footer locale={locale} />
      <BottomNav locale={locale} />
    </main>
  );
};
export default Layout;
