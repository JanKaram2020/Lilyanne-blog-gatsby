/** @jsx jsx */
import { GatsbyImage } from 'gatsby-plugin-image';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { jsx, useColorMode } from 'theme-ui';
import clientConfig from '../../client-config';

const Figure = ({ node }) => {
  const [colorMode] = useColorMode();
  const gatsbyImageData = getGatsbyImageData(
    node.asset._ref,
    { maxWidth: 700 },
    clientConfig.sanity
  );
  if (!node || !node.asset || !node.asset._ref) {
    return null;
  }

  return (
    <figure sx={{ m: 0, p: 0 }}>
      <GatsbyImage
        image={gatsbyImageData}
        alt={`${node.alt}`}
        sx={{
          filter: colorMode === 'dark' && 'brightness(85%)',
          maxWidth: '65ch',
        }}
      />
      {node.caption && <figcaption>{node.caption}</figcaption>}
    </figure>
  );
};
export default Figure;
