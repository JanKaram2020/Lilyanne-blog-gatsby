/** @jsx jsx */
import { jsx, Flex, useColorMode } from 'theme-ui';

const ColorModeToggle = ({ children }) => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const toggle = (e) => {
    e.preventDefault();
    setColorMode(isDark ? `default` : `dark`);
  };
  return (
    <Flex
      sx={{
        alignItems: `center`,
        justifyContent: [`center`, `center`, `center`, `flex-end`],
      }}
    >
      <div sx={{ mr: 2 }}>{children}</div>
      <button
        onClick={toggle}
        type="button"
        aria-label={isDark ? `Activate Light mode` : `Activate Dark mode`}
        title={isDark ? `Activate Light mode` : `Activate Dark mode`}
        sx={{
          opacity: 0.65,
          position: `relative`,
          borderRadius: `5px`,
          width: `40px`,
          height: `25px`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          transition: `opacity 0.3s ease`,
          border: `none`,
          outline: `none`,
          background: 'none',
          cursor: `pointer`,
          padding: 0,
          appearance: `none`,
          '&:hover, &:focus': { opacity: 1 },
        }}
      >
        <div
          sx={{
            position: `relative`,
            width: `24px`,
            height: `24px`,
            borderRadius: `50%`,
            border: (t) => (isDark ? `4px solid ${t.colors.primary}` : `none`),
            backgroundColor: isDark ? `toggleIcon` : `transparent`,
            transform: isDark ? `scale(0.55)` : `scale(1)`,
            transition: `all 0.45s ease`,
            overflow: isDark ? `visible` : `hidden`,
            boxShadow: (t) =>
              isDark ? `none` : `inset 8px -8px 0px 0px ${t.colors.primary}`,
            '&:before': {
              content: `""`,
              position: `absolute`,
              right: `-9px`,
              top: `-9px`,
              height: `24px`,
              width: `24px`,
              border: (t) =>
                isDark ? `2px solid ${t.colors.primary}` : `none`,
              borderRadius: `50%`,
              transform: isDark ? `translate(14px, -14px)` : `translate(0, 0)`,
              opacity: isDark ? 0 : 1,
              transition: `transform 0.45s ease`,
            },
            '&:after': {
              content: `""`,
              width: `8px`,
              height: `8px`,
              borderRadius: `50%`,
              margin: `-4px 0 0 -4px`,
              position: `absolute`,
              top: `50%`,
              left: `50%`,
              boxShadow: (t) =>
                `0 -23px 0 ${t.colors.primary}, 0 23px 0 ${t.colors.primary}, 23px 0 0 ${t.colors.primary}, -23px 0 0 ${t.colors.primary}, 15px 15px 0 ${t.colors.primary}, -15px 15px 0 ${t.colors.primary}, 15px -15px 0 ${t.colors.primary}, -15px -15px 0 ${t.colors.primary}`,
              transform: isDark ? `scale(1)` : `scale(0)`,
              transition: `all 0.35s ease`,
            },
          }}
        />
      </button>
    </Flex>
  );
};
export default ColorModeToggle;
