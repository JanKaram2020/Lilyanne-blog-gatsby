import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { useColorMode } from 'theme-ui';

function Logo() {
  const [colorMode] = useColorMode();
  return (
    <StaticImage
      as="figure"
      style={{ padding: 0, margin: 0 }}
      src="../images/logo.png"
      alt="logo"
      imgStyle={{
        filter: colorMode === 'dark' ? 'invert(100%)' : '',
      }}
    />
  );
}
export default Logo;
