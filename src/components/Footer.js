import React from 'react';
import { LocalizedLink } from 'gatsby-theme-i18n';
import { useTranslation } from 'react-i18next';
import { Flex, Link } from 'theme-ui';
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
              {t('blog')}
            </Link>
          </li>
          <li>
            <Link variant="footer" as={LocalizedLink} to="/categories">
              {t('categories')}
            </Link>
          </li>
          <li>
            <Link variant="footer" as={LocalizedLink} to="/about">
              {t('about')}
            </Link>
          </li>
          <li>
            <Link variant="footer" as={LocalizedLink} to="/contact">
              {t('contact')}
            </Link>
          </li>
        </Flex>
        <Flex as="ul" sx={{ listStyle: 'none', p: 0, flexDirection: 'column' }}>
          <li>
            <Link variant="footer" as={LocalizedLink} to="/blog">
              {t('Latest Stories')}
            </Link>
          </li>
          <li>
            <Link variant="footer" as={LocalizedLink} to="/contact">
              {t('contact')}
            </Link>
          </li>
        </Flex>
        <Flex as="ul" sx={{ listStyle: 'none', p: 0, flexDirection: 'column' }}>
          <li>
            <Link
              variant="footer"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </Link>
          </li>
          <li>
            <Link
              variant="footer"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </Link>
          </li>
          <li>
            <Link
              variant="footer"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </Link>
          </li>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Footer;
