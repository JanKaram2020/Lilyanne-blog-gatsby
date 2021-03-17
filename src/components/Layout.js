import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Footer from './Footer';
import Nav from './Nav';

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />
    <Nav />
    {children}
    <Footer />
  </>
);
export default Layout;
