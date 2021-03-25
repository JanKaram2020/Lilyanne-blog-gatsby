import React from 'react';
import { Flex, NavLink, useColorMode } from 'theme-ui';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { LocalizedLink, useLocalization } from 'gatsby-theme-i18n';
import ColorModeToggle from './ColorButton';
import Logo from './Logo';

const Nav = () => {
  const { locale } = useLocalization();
  const { t } = useTranslation('Nav');
  const [colorMode] = useColorMode();
  return (
    <Flex
      as="nav"
      sx={{
        bg: 'darken',
        padding: '1px 0px 10px 10px',
        alignItems: 'center',
        justifyItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        flexDirection: ['column', 'row'],
      }}
    >
      <Flex
        sx={{
          alignItems: 'center',
          justifyItems: 'center',
          justifyContent: 'space-between',
          gap: '10px',
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}
      >
        <NavLink as={LocalizedLink} to="/">
          <Flex
            sx={{
              width: ['100px', '125px', '150px'],
              display: 'inline-flex',
              direction: 'ltr',
              alignItems: 'center',
              justifyItems: 'center',
              paddingTop: '5px',
            }}
          >
            <Logo color={colorMode === 'default' ? '#ff613c' : '#3cf'} />
          </Flex>
        </NavLink>
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
      <Flex
        sx={{
          justifySelf: 'flex-end',
          alignItems: 'center',
          justifyItems: 'center',
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        {locale !== 'ar' && (
          <NavLink as={Link} variant="small" to="/ar">
            عربي
          </NavLink>
        )}
        {locale !== 'en' && (
          <NavLink as={Link} variant="small" to="/">
            English
          </NavLink>
        )}
        {locale !== 'fr' && (
          <NavLink as={Link} variant="small" to="/fr">
            français
          </NavLink>
        )}
        <ColorModeToggle>
          <NavLink as={Flex} variant="small">
            {t('toggle')}
          </NavLink>
        </ColorModeToggle>
      </Flex>
    </Flex>
  );
};
export default Nav;
