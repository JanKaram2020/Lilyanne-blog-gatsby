/** @jsx jsx */
import { Link } from 'gatsby';
import React from 'react';
import { useLocalization } from 'gatsby-theme-i18n';
import { jsx, Flex, Link as BottomLink } from 'theme-ui';
import ColorModeToggle from '../components/ColorButton';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import { toggle, language } from '../translations/Nav.transaltion';

export default function SettingsPage() {
  const { locale } = useLocalization();
  return (
    <Layout>
      <Flex
        as="section"
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <figure
          sx={{
            width: '300px',
            height: '180px',
            m: 0,
            p: 0,
          }}
        >
          <Logo />
        </figure>
        <h1 sx={{ p: 0, m: 0 }}>{language[locale]}</h1>
        <Flex
          as="ul"
          sx={{
            p: 0,
            gap: '10px',
            listStyle: 'none',
            justifyItems: 'center',
            alignItems: 'center',
          }}
        >
          {locale !== 'ar' && (
            <li>
              <BottomLink variant="bottom" as={Link} to="/ar/settings">
                عربي
              </BottomLink>
            </li>
          )}
          {locale !== 'en' && (
            <li>
              <BottomLink variant="bottom" as={Link} to="/settings">
                English
              </BottomLink>
            </li>
          )}
          {locale !== 'fr' && (
            <li>
              <BottomLink variant="bottom" as={Link} to="/fr/settings">
                Français
              </BottomLink>
            </li>
          )}
        </Flex>
        <Flex
          sx={{
            flexDirection: 'column',
            justifyItems: 'center',
            alignItems: 'center',
          }}
        >
          <h1 sx={{ p: 0, m: 0 }}>{toggle[locale]}</h1>
          <ColorModeToggle />
        </Flex>
      </Flex>
    </Layout>
  );
}
