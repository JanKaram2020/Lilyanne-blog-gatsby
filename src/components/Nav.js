/** @jsx jsx */
import { Flex, NavLink, jsx } from 'theme-ui';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { LocalizedLink, useLocalization } from 'gatsby-theme-i18n';
import ColorModeToggle from './ColorButton';
import Logo from './Logo';

const Nav = () => {
  const { locale } = useLocalization();
  const { t } = useTranslation('Nav');
  return (
    <Flex
      as="nav"
      sx={{
        bg: 'darken',
        alignItems: 'center',
        justifyItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        flexDirection: ['column', 'column', 'row'],
      }}
    >
      <Flex
        sx={{
          alignItems: 'center',
          justifyItems: 'center',
          justifyContent: 'space-between',
          gap: ['5px', '8px', '10px'],
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
            }}
          >
            <Logo />
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
          gap: ['5px', '8px', '10px'],
          flexWrap: 'wrap',
        }}
      >
        {locale !== 'ar' && (
          <NavLink as={Link} to="/ar">
            عربي
          </NavLink>
        )}
        {locale !== 'en' && (
          <NavLink as={Link} to="/">
            English
          </NavLink>
        )}
        {locale !== 'fr' && (
          <NavLink as={Link} to="/fr">
            Français
          </NavLink>
        )}
        <ColorModeToggle>
          <NavLink as={Flex}>{t('toggle')}</NavLink>
        </ColorModeToggle>
      </Flex>
    </Flex>
  );
};
export default Nav;
