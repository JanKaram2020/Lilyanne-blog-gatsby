/** @jsx jsx */
import { Flex, Link as BottomLink, jsx } from 'theme-ui';
import { LocalizedLink } from 'gatsby-theme-i18n';
import {
  AiFillHome,
  AiFillBook,
  AiFillContacts,
  AiFillMail,
  AiFillSetting,
} from 'react-icons/ai';
import { useScrollDirection } from '../helpers';
import {
  home,
  blog,
  contact,
  about,
  settings,
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
        borderTop: '5px solid rgba(0,0,0,0.1)',
      }}
    >
      <Flex
        as="ul"
        variant="flex.default"
        sx={{
          listStyle: 'none',
          p: 0,
          flexDirection: 'row',
        }}
      >
        <li>
          <BottomLink variant="bottom" as={LocalizedLink} to="/">
            <AiFillHome size={35} />
            {home[locale]}
          </BottomLink>
        </li>
        <li>
          <BottomLink variant="bottom" as={LocalizedLink} to="/blog">
            <AiFillBook size={35} />
            {blog[locale]}
          </BottomLink>
        </li>
        <li>
          <BottomLink variant="bottom" as={LocalizedLink} to="/about">
            <AiFillContacts size={35} />
            {about[locale]}
          </BottomLink>
        </li>
        <li>
          <BottomLink variant="bottom" as={LocalizedLink} to="/contact">
            <AiFillMail size={35} />
            {contact[locale]}
          </BottomLink>
        </li>
        <li>
          <BottomLink variant="bottom" as={LocalizedLink} to="/settings">
            <AiFillSetting size={35} />
            {settings[locale]}
          </BottomLink>
        </li>
      </Flex>
    </Flex>
  );
};
export default BottomNav;
