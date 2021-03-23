import React from 'react';
import { useColorMode } from 'theme-ui';

export default () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <button
      type="button"
      onClick={(e) => {
        setColorMode(colorMode === 'default' ? 'dark' : 'default');
      }}
    >
      Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
    </button>
  );
};
