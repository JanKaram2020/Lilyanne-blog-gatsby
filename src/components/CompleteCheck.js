/** @jsx jsx */
import { jsx, useColorMode, Flex } from 'theme-ui';
import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from 'react-icons/ai';
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import Theme from '../gatsby-plugin-theme-ui';

const CompleteCheck = () => {
  const [colorMode] = useColorMode();
  const dark = colorMode === 'dark';
  const color = dark ? Theme.colors.modes.dark.primary : Theme.colors.primary;
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => yRange.onChange((v) => setIsComplete(v >= 1)), [yRange]);

  return (
    <Flex
      as="aside"
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyItems: 'center',
        position: 'fixed',
        top: ['10px', null, '90px'],
        left: ['10px', null, '20px'],
        zIndex: 10,
      }}
    >
      <svg
        viewBox="0 0 60 60"
        sx={{
          width: ['70px', null, '80px'],
          height: ['70px', null, '80px'],
        }}
      >
        <motion.path
          fill="none"
          strokeWidth="5"
          stroke={color}
          strokeDasharray="0 1"
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          style={{
            pathLength,
            rotate: 90,
            translateX: 5,
            translateY: 5,
            scaleX: -1, // Reverse direction of line animation
          }}
        />
        <motion.path
          fill="none"
          strokeWidth="5"
          stroke={color}
          d="M14,26 L 22,33 L 35,16"
          initial={false}
          strokeDasharray="0 1"
          animate={{ pathLength: isComplete ? 1 : 0 }}
        />
      </svg>
    </Flex>
  );
};
export default CompleteCheck;
