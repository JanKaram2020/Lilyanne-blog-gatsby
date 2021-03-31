/** @jsx jsx */
import { StaticImage } from 'gatsby-plugin-image';
import { useLocalization } from 'gatsby-theme-i18n';
import { Box, Grid, useColorMode, jsx } from 'theme-ui';

const Hero = () => {
  const [colorMode] = useColorMode();
  const dark = colorMode === 'dark';
  const { locale } = useLocalization();
  const arabic = locale === 'ar';
  console.log(dark);
  return (
    <Grid
      sx={{
        gridTemplateColumns: '1fr',
        gridTemplateRows: '1fr',
        height: ['44vh', '66vh', '88vh'],
        margin: '-10px',
      }}
    >
      {/* first box image will cover the whole grid area */}

      <StaticImage
        src="../images/hero.jpg"
        alt="Lilyanne Hany"
        layout="fullWidth"
        sx={{
          gridArea: '1 / 1 / 2 / 3',
          zIndex: 1,
          filter: colorMode === 'dark' && 'brightness(85%)',
        }}
      />

      {/* linear gradient second box gradient will cover the whole grid area */}
      <Box
        sx={{
          gridArea: '1 / 1 / 2 / 3',
          zIndex: 2,
          maxWidth: '100%',
          background: `linear-gradient(${arabic ? '-' : ''}90deg,${
            dark ? '#33ccff70' : '#ff613c7a'
          } 30%,rgba(255,255,255,0) 100%)`,
        }}
      />
      {/* this box is for text third box gradient will cover the whole grid area */}
      <Box
        sx={{
          gridArea: '1 / 1 / 2 / 3',
          zIndex: 3,
          width: ['100%', '75%', '50%'],
          color: 'background',
          padding: '10px',
        }}
      >
        <h1 sx={{ fontFamily: 'heading', fontSize: 5 }}>Hi I'm Lilyanne</h1>
        <p>
          A writer who spends her time creating, telling and teaching people how
          to craft beautiful stories. Please take a mini tour of my work and my
          life; I hope that you'll enjoy your time visiting.
        </p>
      </Box>
    </Grid>
  );
};
export default Hero;
