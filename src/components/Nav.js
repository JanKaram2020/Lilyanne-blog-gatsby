/** @jsx jsx */
import { jsx, Flex, NavLink, useColorMode } from 'theme-ui';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { LocalizedLink, useLocalization } from 'gatsby-theme-i18n';
import ColorButton from './ColorButton';
import Logo from './Logo';

const Nav = () => {
  const { locale } = useLocalization();
  const { t } = useTranslation('Nav');
  const [colorMode] = useColorMode();
  return (
    <Flex
      as="nav"
      sx={{
        alignItems: 'center',
        justifyItems: 'center',
        justifyContent: 'space-between',
        gap: '10px',
        flexWrap: 'wrap',
        padding: '10px',
      }}
    >
      <Flex
        sx={{
          alignItems: 'center',
          justifyItems: 'center',
          justifyContent: 'space-between',
          gap: '10px',
          flexWrap: 'wrap',
          padding: '1px 0px 10px 10px',
        }}
      >
        <NavLink as={LocalizedLink} to="/">
          <Logo
            color={colorMode === 'default' ? '#ff613c' : '#3cf'}
            width="100px"
          />
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
        {locale === 'ar' ? (
          ''
        ) : (
          <NavLink as={Link} to="/ar">
            عربي
          </NavLink>
        )}
        {locale === 'en' ? (
          ''
        ) : (
          <NavLink as={Link} to="/">
            English
          </NavLink>
        )}
        {locale === 'fr' ? (
          ''
        ) : (
          <NavLink as={Link} to="/fr">
            français
          </NavLink>
        )}
        <ColorButton />
      </Flex>
    </Flex>
  );
};
export default Nav;
