/** @jsx jsx */
import { Flex, NavLink, jsx } from 'theme-ui';
import { Link } from 'gatsby';
import { LocalizedLink } from 'gatsby-theme-i18n';
import { useScrollDirection } from '../helpers';
import ColorModeToggle from './ColorButton';
import {
  home,
  blog,
  about,
  contact,
  toggle,
} from '../translations/Nav.transaltion';

const BottomNav = ({ locale }) => {
  const dir = useScrollDirection({ initialDirection: 'up' });
  return (
    <Flex
      as="nav"
      sx={{
        display: [`${dir === 'up' ? 'flex' : 'none'}`, null, 'none'],
        zIndex: 20,
        width: ['100%', null, 'auto'],
        overflow: ['hidden', null, 'auto'],
        position: ['fixed', null, 'static'],
        bottom: [0, 'null', 'auto'],
        bg: 'darken',
        alignItems: 'center',
        justifyItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        flexDirection: ['column', 'column', 'row'],
        transitionDuration: '2s',
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
          gap: '10px',
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}
      >
        <li>
          <NavLink as={LocalizedLink} to="/">
            {home[locale]}
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
          gap: '10px',
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
};
export default BottomNav;
