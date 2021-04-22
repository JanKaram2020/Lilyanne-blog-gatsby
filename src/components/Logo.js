import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { useColorMode } from 'theme-ui';

export default function Logo() {
  const [colorMode] = useColorMode();
  return (
    <StaticImage
      as="figure"
      width={350}
      style={{ padding: 0, margin: 0, marginLeft: '5px' }}
      // src="../images/newLogo.png"
      src="../images/logo-new.png"
      alt="logo"
      imgStyle={{
        filter: colorMode === 'dark' ? 'invert(100%)' : '',
      }}
    />
  );
}
