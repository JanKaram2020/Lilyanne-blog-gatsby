import React from 'react';
import { LocalizedLink } from 'gatsby-theme-i18n';
import { useColorMode } from 'theme-ui';
import Logo from './Logo';

const Footer = () => {
  const [colorMode] = useColorMode();
  return (
    <footer>
      <div>
        <Logo color={colorMode === 'default' ? '#ff613c' : '#3cf'} />
      </div>
      <div>
        <section>
          <ul>
            <li>
              <LocalizedLink to="/">Home</LocalizedLink>
            </li>
            <li>
              <LocalizedLink to="/about">About</LocalizedLink>
            </li>
            <li>
              <LocalizedLink to="/blog">Blog</LocalizedLink>
            </li>
          </ul>
        </section>
        <section>
          <ul>
            <li>
              <LocalizedLink to="/blog">Latest Stories</LocalizedLink>
            </li>
            <li>
              <LocalizedLink to="/contact">Contact</LocalizedLink>
            </li>
          </ul>
        </section>
        <section>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <LocalizedLink to="/contact">Contact</LocalizedLink>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
};
export default Footer;
