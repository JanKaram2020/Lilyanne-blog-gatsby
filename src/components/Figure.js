/** @jsx jsx */
import { GatsbyImage } from 'gatsby-plugin-image';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { jsx, useColorMode } from 'theme-ui';
import clientConfig from '../../client-config';

const Figure = ({ node }) => {
  const [colorMode] = useColorMode();
  console.log('node is', node);
  const gatsbyImageData = getGatsbyImageData(
    node.asset._ref,
    { maxWidth: 700 },
    clientConfig.sanity
  );
  console.log('gatsby image is', gatsbyImageData);
  if (!node || !node.asset || !node.asset._ref) {
    return null;
  }

  return (
    <figure>
      <GatsbyImage
        image={gatsbyImageData}
        alt={`${node.alt}`}
        sx={{
          filter: colorMode === 'dark' && 'brightness(85%)',
        }}
      />
      <figcaption>{node.caption}</figcaption>
    </figure>
  );
};
export default Figure;
