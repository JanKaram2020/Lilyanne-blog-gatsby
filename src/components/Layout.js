/** @jsx jsx */
import 'normalize.css';
import { useLocalization } from 'gatsby-theme-i18n';
import React from 'react';
import { jsx, Styled } from 'theme-ui';
import Footer from './Footer';
import Nav from './Nav';

const Layout = ({ children }) => (
  // eslint-disable-next-line react/jsx-pascal-case
  <Styled.root>
    <Nav />
    {children}
    <Footer />
  </Styled.root>
);
export default Layout;
