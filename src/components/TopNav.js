/** @jsx jsx */
import { Flex, NavLink, jsx } from 'theme-ui';
import { Link } from 'gatsby';
import { LocalizedLink } from 'gatsby-theme-i18n';
import ColorModeToggle from './ColorButton';
import Logo from './Logo';
import { blog, about, contact, toggle } from '../translations/Nav.transaltion';

const TopNav = ({ locale }) => (
  <Flex
    as="nav"
    sx={{
      display: ['none', null, 'flex'],
      bg: 'darken',
      alignItems: 'center',
      justifyItems: 'center',
      alignContent: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      flexDirection: ['column', 'column', 'row'],
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
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
          {blog[locale]}
        </NavLink>
      </li>
      <li>
        <NavLink as={LocalizedLink} to="/about">
          {about[locale]}
        </NavLink>
      </li>
      <li>
        <NavLink as={LocalizedLink} to="/contact">
          {contact[locale]}
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
          <NavLink as={Flex}>{toggle[locale]}</NavLink>
        </ColorModeToggle>
      </li>
    </Flex>
  </Flex>
);
export default TopNav;
