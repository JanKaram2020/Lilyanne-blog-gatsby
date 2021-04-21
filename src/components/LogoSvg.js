import React from 'react';
import { useColorMode } from 'theme-ui';
import { motion } from 'framer-motion';
import Theme from '../gatsby-plugin-theme-ui/index';

export function Icon({ style }) {
  const [colorMode] = useColorMode();
  const dark = colorMode === 'dark';
  const color = dark ? Theme.colors.modes.dark.primary : Theme.colors.primary;
  const initialColor = dark ? `rgba(0,204,255,0.00)` : `rgba(255,97,60,0.00)`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 759.93 352.58"
      style={style}
    >
      <motion.path
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="15"
        d="M7.5 7.5H307.5V307.5H7.5z"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0 }}
      />
      <motion.path
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="15"
        d="M7.5 7.5L307.5 307.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.path
        fill="#none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="15"
        d="M157.5 157.5L307.5 157.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1 }}
      />
      <motion.path
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="15"
        d="M268.62,160.7c.17-3.82,2.06-69.94-51.15-103.08-43.75-27.25-103.66-19-140.79,18.84C40,113.92,33.47,172.29,60.18,216.81c24.87,41.44,75.57,66,125.1,53.06C238.42,256,266.6,205.2,268.62,160.7Z"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      />
      {/* name starts here */}
      <motion.path
        d="M367.22 76v6.33Q349.36 106 338.16 106q-6.06 0-9.53-6.62t-3.46-17.4q0-8.72 4.1-20.72a150.13 150.13 0 0111-24.36 152.55 152.55 0 0114.27-21.53q7.39-9.19 13.72-12.87a8.71 8.71 0 014-1.53 2.3 2.3 0 012.39 1.58 17 17 0 01.6 5.42q0 11.88-9.65 29.19t-26.93 35.3a38.92 38.92 0 00-.85 6.84 15.32 15.32 0 002.35 8.88 7.51 7.51 0 006.54 3.42 8.4 8.4 0 004.61-1.66 47.89 47.89 0 005.22-4.15q2.73-2.47 10.68-9.79zm-25.55-15.42a85.77 85.77 0 008.58-9.91 126.45 126.45 0 007.83-11.88 98.39 98.39 0 005.76-11.37q2.1-5 2.1-7.61c0-1.31-.46-2-1.37-2a5 5 0 00-2 .94q-5.21 4.28-11.7 16.71a99.44 99.44 0 00-9.2 25.12z"
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="4"
        initial={{ fill: initialColor, pathLength: 0 }}
        animate={{ fill: color, pathLength: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      />
      <motion.path
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="4"
        initial={{ fill: initialColor, pathLength: 0 }}
        animate={{ fill: color, pathLength: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        d="M407.3 76.9v6.24q-8.3 10.68-15.47 16.11t-12.22 5.43q-7 0-10.42-7.35a37.63 37.63 0 01-3.42-16.07 28.73 28.73 0 01.68-6.37 24.9 24.9 0 011.62-5q.94-2 3.51-6.15 12.14-18.89 22.22-18.89 5.2 0 5.21 4 0 2.73-3.37 8.55a37.79 37.79 0 01-6 8.29 133.35 133.35 0 00-9.7 10 9.94 9.94 0 00-2.26 6.41 6.57 6.57 0 002.3 5.12 8.68 8.68 0 006 2.05 17.33 17.33 0 008.84-2.94 109.82 109.82 0 0012.48-9.43zm-5.81-38.2a6.22 6.22 0 01-4.06-1.62 5.16 5.16 0 01-1.92-4.08c0-2.5 1.19-5.29 3.59-8.37S404 20 406.53 20a6.09 6.09 0 014.28 1.58 5.94 5.94 0 011.71 4.58c0 2.45-1.17 5.15-3.51 8.12s-4.84 4.42-7.52 4.42z"
      />
      <motion.path
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="4"
        initial={{ fill: initialColor, pathLength: 0 }}
        animate={{ fill: color, pathLength: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        d="M447.38 76v6.33Q429.53 106 418.33 106q-6.07 0-9.53-6.62t-3.46-17.4q0-8.72 4.1-20.72a149.2 149.2 0 0111-24.36 153.42 153.42 0 0114.27-21.53q7.4-9.19 13.72-12.87a8.77 8.77 0 014-1.53 2.32 2.32 0 012.39 1.58 17 17 0 01.6 5.42q0 11.88-9.66 29.19t-26.92 35.3a38.92 38.92 0 00-.84 6.84 15.32 15.32 0 002.35 8.88 7.48 7.48 0 006.53 3.42 8.4 8.4 0 004.62-1.66 47.84 47.84 0 005.21-4.15q2.72-2.47 10.67-9.79zm-25.55-15.42a85.82 85.82 0 008.59-9.91 126.39 126.39 0 007.82-11.88A98.62 98.62 0 00444 27.42q2.08-5 2.09-7.61c0-1.31-.45-2-1.36-2a4.9 4.9 0 00-2 .94q-5.22 4.28-11.71 16.71a99.44 99.44 0 00-9.19 25.12z"
      />
      <motion.path
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="4"
        initial={{ fill: initialColor, pathLength: 0 }}
        animate={{ fill: color, pathLength: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        d="M483.71 80.24l-15.22 12.9q-10.85 9.48-14.52 9.49-3.35 0-7-7.65t-3.69-13.38a20.26 20.26 0 011.5-8.24A58.79 58.79 0 01450 64.6a115.78 115.78 0 0110-12.31 72.3 72.3 0 018.46-7.82q3.68-2.78 5.13-2.78a6.18 6.18 0 014.41 2.39 7.31 7.31 0 012.18 5q0 1.62-2.35 5.21a75.28 75.28 0 01-7.43 9.11 166.62 166.62 0 01-14.15 13.2l-1.62 4.7a5.44 5.44 0 00-.68 2.39 2 2 0 002.3 2.31q2.4 0 11.24-6.07a141.88 141.88 0 0019.21-16.36q4-4 6.66-7.09c1.77-2 3.37-4 4.79-5.77a42.42 42.42 0 013.55-4.06 4.39 4.39 0 012.52-1.45 3.18 3.18 0 013.33 1.8 11.61 11.61 0 01-.85 11.84q-2.06 3.45-7.7 11.79t-11.23 17.25q-5.61 8.94-11.41 20.13l5.25-5.13q5-4.86 10.56-10.17t9.14-8.5q3.6-3.21 9-7.48v5.73q-11.55 12.39-20.9 23.5T475 123.74l-6 7.77c-1.54 2-2.92 3.86-4.15 5.6a50 50 0 01-3.07 4q-1.25 1.41-2 1.41-1.8 0-3.21-3.55a17.31 17.31 0 01-1.41-6.28 9.58 9.58 0 01.94-4.36q6.15-13.82 27.61-48.09z"
      />
      <motion.path
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="4"
        initial={{ fill: initialColor, pathLength: 0 }}
        animate={{ fill: color, pathLength: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        d="M519.94 61.6q13-11.79 25.22-17.52T564 38.36a4.75 4.75 0 013.34 1.49 11.56 11.56 0 012.43 3.47 8 8 0 01.9 2.9 2.47 2.47 0 01-1.2 2.27 24.82 24.82 0 01-4.18 1.75c.39.91.91 2.08 1.53 3.5s1.11 2.58 1.46 3.46a6.7 6.7 0 01.51 2.35q0 2.06-4.15 7.65c-2.76 3.74-4.7 6.48-5.81 8.25a12 12 0 00-1.66 6.49q0 6.33 5.81 6.33 6 0 18.71-11.2v5.22q-21.62 24-30.93 24c-2.23 0-3.81-.72-4.75-2.18s-1.41-3.6-1.41-6.45q0-6.75 4.87-19.57Q537 91.95 531 97.8t-10 5.85q-1.87 0-4.7-3.24a31.29 31.29 0 01-5-8.42 27.41 27.41 0 01-2.18-10.73 25 25 0 01.77-6.71 16.27 16.27 0 013-5.51 77.16 77.16 0 017.05-7.44zm40.94-9.4q-22.21 10.17-31.66 17.27t-9.45 14.61a9.53 9.53 0 00.94 4.49 2.85 2.85 0 002.57 1.75 9.39 9.39 0 003.33-1.2A67.19 67.19 0 00543 75.32q7.46-8.5 17.88-23.12z"
      />
      <motion.path
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="4"
        initial={{ fill: initialColor, pathLength: 0 }}
        animate={{ fill: color, pathLength: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        d="M638.57 61.43q-15 16.75-15 23.34c0 2.45 1 3.67 3 3.67q2.47 0 6.45-2.61t12.43-9.27v5.9q-12.14 12-18.63 17.26T616.18 105q-7 0-7-9.23a17.38 17.38 0 01.85-5.38 36.19 36.19 0 012.35-5.52q1.5-2.85 4.58-8.2T624 64.6q-4.87 2.48-12.22 9.82a96.09 96.09 0 00-8.12 8.76q-3.33 4.16-7.14 9.23a73.54 73.54 0 01-5.52 6.84 5.07 5.07 0 01-3.55 1.75c-1.82 0-3.5-1.9-5-5.72a35.49 35.49 0 01-2.31-13.34 20.22 20.22 0 011.07-7.34 48.78 48.78 0 014.23-7.53 83.85 83.85 0 0110.17-13.29q4.27-4.23 8.2-4.23a9 9 0 014.41.94 3.12 3.12 0 011.66 2.91 3.73 3.73 0 01-.51 1.79 10.64 10.64 0 01-1.15 1.71c-.43.52-1.33 1.51-2.7 3Q592 74.86 592 79.3c0 1.65.54 2.47 1.62 2.47.69 0 2-1.09 4-3.29s4.5-5.07 7.6-8.63a138.18 138.18 0 0111-11.15 117.62 117.62 0 0114.49-11.2c3-2.1 5.52-3.16 7.52-3.16.91 0 1.8 1.25 2.69 3.76a22.83 22.83 0 011.32 7.61q0 1.88-3.67 5.72z"
      />
      <motion.path
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="4"
        initial={{ fill: initialColor, pathLength: 0 }}
        animate={{ fill: color, pathLength: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        d="M702.49 61.43q-15 16.75-15 23.34 0 3.67 3 3.67 2.49 0 6.46-2.61t12.43-9.27v5.9q-12.14 12-18.63 17.26T680.1 105q-7 0-7-9.23a17.4 17.4 0 01.86-5.38 35.22 35.22 0 012.35-5.52q1.5-2.85 4.57-8.2T688 64.6q-4.87 2.48-12.23 9.82a95.87 95.87 0 00-8.11 8.76q-3.35 4.16-7.14 9.23a73.16 73.16 0 01-5.56 6.84 5.05 5.05 0 01-3.54 1.75c-1.83 0-3.51-1.9-5-5.72A35.69 35.69 0 01644 81.94a20 20 0 011.07-7.34 48.78 48.78 0 014.23-7.53 83.85 83.85 0 0110.17-13.29q4.26-4.23 8.2-4.23a9 9 0 014.4.94 3.13 3.13 0 011.67 2.91 3.73 3.73 0 01-.51 1.79 10.68 10.68 0 01-1.16 1.71c-.43.52-1.32 1.51-2.69 3q-13.5 15-13.5 19.4c0 1.65.54 2.47 1.62 2.47.68 0 2-1.09 4-3.29s4.5-5.07 7.61-8.63a138.18 138.18 0 0111-11.15 118.24 118.24 0 0114.48-11.2c3-2.1 5.53-3.16 7.52-3.16q1.36 0 2.69 3.76a22.59 22.59 0 011.33 7.61q.04 1.88-3.64 5.72z"
      />
      <motion.path
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="4"
        initial={{ fill: initialColor, pathLength: 0 }}
        animate={{ fill: color, pathLength: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        d="M722.49 80v2.14q0 5 2.48 7.86a8.24 8.24 0 006.5 2.82 21.56 21.56 0 008.67-2 47.11 47.11 0 008.93-5.21q4.44-3.24 10.86-8.72v5.22q-9.66 11.63-18.12 17.82t-17.18 6.19a14.27 14.27 0 01-12-5.9q-4.44-5.9-4.44-16.15a32.17 32.17 0 014.18-16.28q4.18-7.3 13.68-15.43A52.9 52.9 0 01738.9 44a29 29 0 0111.45-2.82 10.05 10.05 0 016.37 1.82 6.55 6.55 0 012.35 5.51 17.8 17.8 0 01-4 10.72q-4 5.36-12.27 10.6A125.15 125.15 0 01722.49 80zm.86-5.56A48.64 48.64 0 00736.51 67a38.15 38.15 0 008.08-8.5q2.6-4.07 2.6-5.94c0-1.31-.6-2-1.79-2-1 0-2.69.66-5 2a41.32 41.32 0 00-7 5.12 37.61 37.61 0 00-6.4 7.43 24 24 0 00-3.65 9.31zM390.29 286.94v5.38q-7.43 7.6-12.86 12.44a69.26 69.26 0 01-9.48 7.3c-2.71 1.66-5 2.48-6.88 2.48q-6.68 0-6.67-7.86 0-6.31 4.14-14.66a166.94 166.94 0 0111.93-19.61 50.49 50.49 0 00-13.34 10.73q-2.64 3-4.44 5.17-5.55 6.24-10.68 12.77t-6.92 8.51a4.92 4.92 0 01-3.42 2q-6.68 0-6.67-16.41a49.43 49.43 0 011.62-11.88q1.63-6.5 8.72-17.17 15-22.39 25.6-36.63a239.6 239.6 0 0117.65-21.53q7-7.31 9.4-7.14a13.12 13.12 0 014.83 1.2q1.83.94 1.83 2.13 0 2.15-2.94 7t-10.13 15.35q-7.79 11-11 15.51t-9.7 12.73q-6.45 8.25-11.79 14.7t-12.18 14v10.26q11.44-12.74 19.83-20.85a130.67 130.67 0 0114.18-12.27q5.82-4.14 8.55-4.14c1.71 0 3.3 1 4.79 3s2.22 3.69 2.22 5a4.19 4.19 0 01-.86 2.14q-6.15 7.35-9.78 12.18a62.53 62.53 0 00-5.6 8.63 14.75 14.75 0 00-2 6.54c0 2.68 1.28 4 3.84 4q4.12.06 18.21-11z"
      />
      <motion.path
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="4"
        initial={{ fill: initialColor, pathLength: 0 }}
        animate={{ fill: color, pathLength: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        d="M400.29 271.64q13-11.79 25.22-17.52t18.88-5.73a4.72 4.72 0 013.34 1.5 11.52 11.52 0 012.43 3.46 8 8 0 01.9 2.91 2.45 2.45 0 01-1.2 2.26 23.23 23.23 0 01-4.18 1.75c.39.92.91 2.08 1.53 3.51s1.12 2.58 1.46 3.46a6.66 6.66 0 01.51 2.35q0 2.06-4.15 7.65t-5.81 8.25a12 12 0 00-1.66 6.49q0 6.33 5.81 6.33 6 0 18.71-11.2v5.21q-21.61 24-30.93 24-3.34 0-4.75-2.18t-1.4-6.43q0-6.75 4.87-19.57-12.47 13.86-18.55 19.69t-10 5.86q-1.87 0-4.7-3.25a31.13 31.13 0 01-5-8.42 27.36 27.36 0 01-2.18-10.72 24.91 24.91 0 01.77-6.71 16.17 16.17 0 013-5.51 77.16 77.16 0 017.08-7.44zm40.94-9.4Q419 272.41 409.57 279.5t-9.45 14.62a9.48 9.48 0 00.94 4.48 2.86 2.86 0 002.57 1.76 9.39 9.39 0 003.33-1.2 67.19 67.19 0 0016.41-13.8q7.44-8.5 17.86-23.12z"
      />
      <motion.path
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="4"
        initial={{ fill: initialColor, pathLength: 0 }}
        animate={{ fill: color, pathLength: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        d="M518.92 271.47q-15 16.75-15 23.33c0 2.45 1 3.68 3 3.68q2.47 0 6.45-2.61t12.44-9.27v5.89q-12.15 12-18.64 17.27t-10.59 5.3q-7 0-7-9.23a17.45 17.45 0 01.85-5.39 36.53 36.53 0 012.35-5.51q1.5-2.87 4.58-8.2t7.09-12.1q-4.87 2.49-12.22 9.83a96.09 96.09 0 00-8.12 8.76q-3.33 4.14-7.14 9.23a73.54 73.54 0 01-5.55 6.84 5.07 5.07 0 01-3.55 1.75q-2.73 0-5-5.73a35.44 35.44 0 01-2.41-13.31 20.32 20.32 0 011.07-7.35 49.26 49.26 0 014.23-7.52 83.38 83.38 0 0110.17-13.29q4.27-4.23 8.2-4.23a8.94 8.94 0 014.41.94 3.12 3.12 0 011.66 2.91 3.76 3.76 0 01-.51 1.79 10.64 10.64 0 01-1.15 1.71c-.43.51-1.33 1.51-2.7 3q-13.5 15-13.5 19.4c0 1.65.54 2.48 1.62 2.48.69 0 2-1.1 4-3.29s4.5-5.07 7.6-8.63a139.85 139.85 0 0111-11.16 118.56 118.56 0 0114.49-11.19q4.52-3.17 7.52-3.16c.91 0 1.8 1.25 2.69 3.76a22.81 22.81 0 011.32 7.6q.01 1.86-3.66 5.7z"
      />
      <motion.path
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="4"
        initial={{ fill: initialColor, pathLength: 0 }}
        animate={{ fill: color, pathLength: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        d="M564.64 290.27l-15.21 12.91q-10.86 9.48-14.53 9.48-3.33 0-7-7.65t-3.67-13.37a20.28 20.28 0 011.49-8.25 59.69 59.69 0 015.17-8.76 117.87 117.87 0 0110-12.3 71.43 71.43 0 018.46-7.82c2.45-1.86 4.16-2.78 5.13-2.78a6.2 6.2 0 014.49 2.39 7.36 7.36 0 012.18 5c0 1.08-.79 2.82-2.35 5.21a75.59 75.59 0 01-7.44 9.1 164.53 164.53 0 01-14.14 13.21l-1.63 4.7a5.58 5.58 0 00-.68 2.39 2 2 0 002.31 2.31q2.38 0 11.24-6.07a142.59 142.59 0 0019.18-16.32q4-4 6.67-7.1c1.76-2.05 3.36-4 4.78-5.77a46.73 46.73 0 013.55-4.06 4.44 4.44 0 012.52-1.45 3.21 3.21 0 013.34 1.8 12.34 12.34 0 011.19 6.06 12 12 0 01-2 5.77q-2.05 3.47-7.69 11.8t-11.3 17.22q-5.6 8.94-11.41 20.13l5.26-5.13q5-4.87 10.55-10.17c3.71-3.53 6.75-6.37 9.15-8.5s5.38-4.63 9-7.48v5.72q-11.54 12.4-20.9 23.51t-14.44 17.77l-5.94 7.78q-2.31 3-4.14 5.6c-1.23 1.74-2.26 3.07-3.08 4s-1.5 1.41-2 1.41c-1.19 0-2.26-1.19-3.2-3.55a17.35 17.35 0 01-1.41-6.28 9.56 9.56 0 01.94-4.36q6.11-13.82 27.56-48.1z"
      />
    </svg>
  );
}
