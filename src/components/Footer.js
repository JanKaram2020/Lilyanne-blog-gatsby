import React from 'react';
import { LocalizedLink } from 'gatsby-theme-i18n';
import { useTranslation } from 'react-i18next';
import { Box, Flex, NavLink } from 'theme-ui';
import Logo from './Logo';

const Footer = () => {
  const { t } = useTranslation('Nav');
  return (
    <Flex
      as="footer"
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyItems: 'center',
        bg: 'darken',
        p: '2rem 0 2rem 0',
      }}
    >
      <Flex
        sx={{
          width: ['300px', '350px', '400px'],
          direction: 'ltr',
          position: 'relative',
          left: '22px',
        }}
      >
        <Logo />
      </Flex>
      <Box
        sx={{
          display: 'flex',
          flexDirection: ['column', 'column', 'row'],
          justifyContent: ['flex-start', 'flex-start', 'space-between'],
          gap: ['10px', '10px', '10rem', '20rem'],
        }}
      >
        <Flex sx={{ flexDirection: 'column' }}>
          <NavLink as={LocalizedLink} to="/blog">
            {t('blog')}
          </NavLink>
          <NavLink as={LocalizedLink} to="/categories">
            {t('categories')}
          </NavLink>
          <NavLink as={LocalizedLink} to="/about">
            {t('about')}
          </NavLink>
          <NavLink as={LocalizedLink} to="/contact">
            {t('contact')}
          </NavLink>
        </Flex>
        <Flex sx={{ flexDirection: 'column' }}>
          <NavLink as={LocalizedLink} to="/blog">
            {t('Latest Stories')}
          </NavLink>
          <NavLink as={LocalizedLink} to="/contact">
            {t('contact')}
          </NavLink>
        </Flex>
        <Flex sx={{ flexDirection: 'column' }}>
          <NavLink
            as="a"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </NavLink>
          <NavLink
            as="a"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </NavLink>
          <NavLink
            as="a"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </NavLink>
        </Flex>
      </Box>
    </Flex>
  );
};
export default Footer;
