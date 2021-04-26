import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';

const TypedSentence = ({ sentence }) => {
  const typeTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: sentence,
      typeSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={typeTarget} />;
};

export default TypedSentence;
