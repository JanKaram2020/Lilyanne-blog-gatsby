import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import clientConfig from '../../client-config';
import Figure from './Figure';

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
    poster: Figure,
    // image: Figure,
    // image: (props) => <GatsbyImage image={props.image} alt={props.title} />,
  },
};
const PortableText = ({ blocks }) => (
  <BlockContent
    blocks={blocks}
    serializers={serializers}
    {...clientConfig.sanity}
  />
);

export default PortableText;
