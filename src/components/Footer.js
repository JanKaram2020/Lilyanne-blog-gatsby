import React from 'react';
import { LocalizedLink } from 'gatsby-theme-i18n';
import { Flex, Link } from 'theme-ui';
import Logo from './Logo';
import {
  blog,
  categories,
  about,
  contact,
  latest,
  facebook,
  insta,
} from '../translations/Footer.translation';

const Footer = ({ locale }) => (
  <Flex
    as="footer"
    sx={{
      flexDirection: 'column',
      alignItems: 'center',
      justifyItems: 'center',
      bg: 'darken',
      p: '10px',
    }}
  >
    <Flex sx={{ width: ['250px', '300px', '350px'] }}>
      <Logo />
    </Flex>
    <Flex
      sx={{
        flexDirection: ['column', 'column', 'row'],
        justifyContent: ['flex-start', 'flex-start', 'space-between'],
        gap: ['10px', null, '10rem', '20rem'],
      }}
    >
      <Flex
        as="ul"
        sx={{ listStyle: 'none', padding: 0, flexDirection: 'column' }}
      >
        <li>
          <Link variant="footer" as={LocalizedLink} to="/blog">
            {blog[locale]}
          </Link>
        </li>
        <li>
          <Link variant="footer" as={LocalizedLink} to="/categories">
            {categories[locale]}
          </Link>
        </li>
        <li>
          <Link variant="footer" as={LocalizedLink} to="/about">
            {about[locale]}
          </Link>
        </li>
      </Flex>
      <Flex as="ul" sx={{ listStyle: 'none', p: 0, flexDirection: 'column' }}>
        <li>
          <Link variant="footer" as={LocalizedLink} to="/blog">
            {latest[locale]}
          </Link>
        </li>
        <li>
          <Link variant="footer" as={LocalizedLink} to="/contact">
            {contact[locale]}
          </Link>
        </li>
      </Flex>
      <Flex as="ul" sx={{ listStyle: 'none', p: 0, flexDirection: 'column' }}>
        <li>
          <Link
            variant="footer"
            href="https://www.facebook.com/lilyanne.hany"
            target="_blank"
            rel="noreferrer"
          >
            {facebook[locale]}
          </Link>
        </li>
        <li>
          <Link
            variant="footer"
            href="https://www.instagram.com/lilyanne_hany/"
            target="_blank"
            rel="noreferrer"
          >
            {insta[locale]}
          </Link>
        </li>
      </Flex>
    </Flex>
  </Flex>
);
export default Footer;
