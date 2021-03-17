import React from 'react';
import BlockContent from '@sanity/block-content-to-react';

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};
const PortableText = ({ blocks }) => (
  <BlockContent
    blocks={blocks}
    serializers={serializers}
    projectId="t6xuw7ui"
    dataset="production"
  />
);

export default PortableText;
