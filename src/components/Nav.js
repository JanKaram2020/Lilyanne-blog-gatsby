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
        as="ul"
        sx={{
          listStyle: 'none',
          p: 0,
          alignItems: 'center',
          justifyItems: 'center',
          justifyContent: 'space-between',
          gap: ['5px', '8px', '10px'],
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}
      >
        <li>
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
        </li>
        <li>
          <NavLink as={LocalizedLink} to="/blog">
            {t('blog')}
          </NavLink>
        </li>
        <li>
          <NavLink as={LocalizedLink} to="/categories">
            {t('categories')}
          </NavLink>
        </li>
        <li>
          <NavLink as={LocalizedLink} to="/about">
            {t('about')}
          </NavLink>
        </li>
        <li>
          <NavLink as={LocalizedLink} to="/contact">
            {t('contact')}
          </NavLink>
        </li>
      </Flex>
      <Flex
        sx={{
          listStyle: 'none',
          p: 0,
          justifySelf: 'flex-end',
          alignItems: 'center',
          justifyItems: 'center',
          gap: ['5px', '8px', '10px'],
          flexWrap: 'wrap',
        }}
        as="ul"
      >
        {locale !== 'ar' && (
          <li>
            <NavLink as={Link} to="/ar">
              عربي
            </NavLink>
          </li>
        )}
        {locale !== 'en' && (
          <li>
            <NavLink as={Link} to="/">
              English
            </NavLink>
          </li>
        )}
        {locale !== 'fr' && (
          <li>
            <NavLink as={Link} to="/fr">
              Français
            </NavLink>
          </li>
        )}
        <li>
          <ColorModeToggle>
            <NavLink as={Flex}>{t('toggle')}</NavLink>
          </ColorModeToggle>
        </li>
      </Flex>
    </Flex>
  );
};
export default Nav;
