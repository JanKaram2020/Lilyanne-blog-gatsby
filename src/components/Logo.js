import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { useColorMode } from 'theme-ui';

function Logo() {
  const [colorMode] = useColorMode();
  return (
    <StaticImage
      src="../images/logo.png"
      alt="logo"
      imgStyle={{
        filter: colorMode === 'dark' ? 'invert(100%)' : '',
      }}
    />
  );
}
export default Logo;
