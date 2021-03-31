import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import clientConfig from '../../client-config';

const Figure = ({ node }) => {
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
      <GatsbyImage image={gatsbyImageData} alt={`${node.alt}`} />
      <figcaption>{node.caption}</figcaption>
    </figure>
  );
};
export default Figure;
