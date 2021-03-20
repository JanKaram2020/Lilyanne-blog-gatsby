/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { LocalizedLink } from 'gatsby-theme-i18n';
import Logo from './Logo';

const Nav = () => {
  const { t } = useTranslation('Nav');
  console.log(t('notFound'));
  return (
    <nav
      sx={{
        // this uses the value from `theme.space[4]`
        padding: 4,
        // these use values from `theme.colors`
        color: 'background',
        backgroundColor: 'primary',
      }}
    >
      <Link to="/ar">عربي</Link>
      <Link to="/">English</Link>
      <Link to="/fr">français</Link>
      <br />
      <LocalizedLink style={{ width: '20px' }} to="/">
        <Logo color="#ff6347" />
      </LocalizedLink>
      <LocalizedLink to="/">{t('home')}</LocalizedLink>
      <LocalizedLink to="/about">{t('about')}</LocalizedLink>
      <LocalizedLink to="/blog">{t('blog')}</LocalizedLink>
      <LocalizedLink to="/categories">{t('categories')}</LocalizedLink>
      <h1> this is the nav</h1>
    </nav>
  );
};
export default Nav;
