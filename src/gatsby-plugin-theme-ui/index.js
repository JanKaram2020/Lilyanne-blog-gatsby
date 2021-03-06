export default {
  borders: ['1px'],
  borderStyles: ['solid', 'dashed'],
  borderWidths: [1, 4],
  colors: {
    text: '#24292E',
    background: '#FFFFFF',
    primary: '#ff613c',
    secondary: '#2e598f',
    muted: '#535353',
    highlight: '#ffaa96',
    gray: '#808080',
    accent: '#cee5ff',
    darken: '#F7F7F7',
    modes: {
      dark: {
        text: '#ececec',
        background: '#060606',
        primary: '#00ccff',
        secondary: '#e0f',
        muted: '#191919',
        highlight: '#29112c',
        gray: '#999',
        accent: '#cee5ff',
        darken: '#262626',
      },
    },
  },
  fonts: {
    // body: 'Roboto,system-ui, sans-serif',
    // heading: 'Pristina-Regular, Pristina,system-ui, sans-serif',
    heading: 'Pacifico, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    '0.75rem',
    '0.9rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '2.125rem',
    '3rem',
    '3.5rem',
    '6rem',
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
    display: 900,
  },
  lettingSpacings: {},
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  radii: [],
  shadows: [
    '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
  ],
  sizes: {
    container: 1140,
  },
  space: [0, 4, 8, 16, 24, 32],
  zIndices: [],
  breakpoints: ['640px', '768px', '1024px', '1280px'],
  styles: {
    root: {
      fontSize: 2,
      fontFamily: 'body',
      lineHeight: 'body',
      wordBreak: 'break-word',
      margin: 0,
      padding: 0,
    },
    p: {
      color: 'text',
      lineHeight: 'body',
      maxWidth: '65ch',
      code: {
        backgroundColor: 'darken',
        color: 'text',
        padding: 1,
      },
    },
    small: {
      fontSize: 0,
    },
    a: {
      color: 'secondary',
    },
    h1: {
      fontFamily: 'heading',
      color: 'primary',
      fontSize: 7,
      fontWeight: 'heading',
      lineHeight: 'heading',
      marginTop: 0,
      marginBottom: 5,
      a: {
        color: 'inherit',
      },
    },
    h2: {
      color: 'text',
      fontSize: 6,
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      marginTop: 0,
      marginBottom: 4,
      a: {
        color: 'inherit',
      },
    },
    h3: {
      color: 'text',
      fontSize: 5,
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      marginTop: 0,
      marginBottom: 3,
      a: {
        color: 'inherit',
      },
    },
    h4: {
      color: 'text',
      fontSize: 4,
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      marginTop: 0,
      marginBottom: 3,
      a: {
        color: 'inherit',
      },
    },
    h5: {
      color: 'text',
      fontSize: 3,
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      marginTop: 0,
      marginBottom: 3,
      a: {
        color: 'inherit',
      },
    },
    h6: {
      color: 'text',
      fontSize: 2,
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      marginTop: 0,
      marginBottom: 3,
    },
    img: {
      maxWidth: '100%',
    },
    pre: {
      borderColor: 'gray',
      borderStyle: 1,
      borderWidth: 0,
      backgroundColor: 'darken',
      color: 'text',
      lineHeight: 'body',
      overflow: 'auto',
      padding: 3,
      code: {
        backgroundColor: 'darken',
        color: 'text',
        lineHeight: 'body',
      },
    },
    ol: {
      color: 'text',
    },
    ul: {
      color: 'text',
    },
    li: {
      color: 'text',
      lineHeight: 'body',
    },
    blockquote: {
      color: 'text',
      borderLeftColor: 'primary',
      borderLeftStyle: 0,
      borderLeftWidth: 1,
      padding: 2,
      backgroundColor: 'darken',
      p: {
        margin: 0,
      },
    },
    hr: {
      border: 0,
      borderStyle: 0,
      color: 'muted',
      marginTop: 5,
      marginBottom: 5,
    },
    em: {},
    table: {
      color: 'text',
      border: 0,
      borderStyle: 0,
      borderColor: 'gray',
      borderCollapse: 'collapse',
      mb: 3,
    },
    tr: {},
    th: {
      backgroundColor: 'darken',
      border: 0,
      borderStyle: 0,
      borderColor: 'gray',
      padding: 2,
    },
    td: {
      border: 0,
      borderStyle: 0,
      borderColor: 'gray',
      padding: 2,
    },
    strong: {},
    del: {},
    b: {},
    i: {},
    progress: {
      backgroundColor: 'darken',
      color: 'primary',
      secondary: {
        backgroundColor: 'darken',
        color: 'secondary',
      },
    },
    donut: {
      primary: {
        color: 'primary',
      },
      secondary: {
        color: 'secondary',
      },
    },
    spinner: {
      primary: {
        color: 'primary',
      },
      secondary: {
        color: 'secondary',
      },
    },
  },
  box: {},
  flex: {
    default: {
      gap: '10px',
      flexWrap: 'wrap',
    },
    center: {
      alignItems: ' center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '10px',
    },
    centerColumn: {
      flexWrap: 'wrap',
      flexDirection: 'column',
      alignItems: ' center',
      justifyContent: 'center',
      gap: '10px',
    },
  },
  grids: {},
  buttons: {
    primary: {
      fontWeight: 'bold',
      backgroundColor: 'primary',
      border: '2px solid',
      borderColor: 'primary',
      textTransform: 'capitalize',
      color: 'background',
      transitionDuration: '0.2s',
      width: '180px',
      height: '100%',
      maxHeight: '40px',
      borderRadius: '10px',
      ':hover': {
        color: 'primary',
        backgroundColor: 'darken',
        cursor: 'pointer',
      },
      ':active': {
        transform: 'scale(0.9)',
      },
    },
    secondary: {
      fontWeight: 'bold',
      backgroundColor: 'darken',
      border: '2px solid',
      borderColor: 'primary',
      textTransform: 'capitalize',
      color: 'primary',
      transitionDuration: '0.2s',
      width: '180px',
      height: '100%',
      maxHeight: '40px',
      borderRadius: '10px',
      ':hover': {
        color: 'background',
        backgroundColor: 'primary',
        cursor: 'pointer',
      },
      ':active': {
        transform: 'scale(0.9)',
      },
    },
    close: {},
    icon: {},
    menu: {},
  },
  text: {
    text: {},
    heading: {
      textTransform: 'capitalize',
      fontFamily: 'heading',
      fontSize: 5,
      maxWidth: '65ch',
    },
  },
  links: {
    nav: {
      color: 'text',
      fontFamily: 'heading',
      fontSize: 3,
      transitionDuration: '0.2s',
      textTransform: 'capitalize',
      ':hover': {
        color: 'primary',
        cursor: 'pointer',
      },
      '&[aria-current]': {
        color: 'primary',
      },
      ':active': {
        transform: 'scale(0.9)',
      },
    },
    footer: {
      color: 'text',
      fontFamily: 'heading',
      fontSize: [4, 3],
      ':hover': {
        color: 'primary',
      },
      textDecoration: 'none',
    },
    bottom: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyItems: 'center',
      color: 'text',
      fontFamily: 'heading',
      fontSize: 2,
      transitionDuration: '0.2s',
      textTransform: 'capitalize',
      textDecoration: 'none',
      py: 10,
      ':hover': {
        color: 'primary',
        cursor: 'pointer',
      },
      '&[aria-current]': {
        color: 'primary',
      },
      ':active': {
        transform: 'scale(0.9)',
      },
    },
  },
  images: {
    avatar: {},
  },
  cards: {
    primary: {
      display: 'grid',
      gap: '10px',
      p: 10,
      m: 10,
      color: 'text',
      boxShadow: 0,
      backgroundColor: 'darken',
      borderRadius: '10px',
      maxWidth: '65ch',
      // maxHeight: '695px',
      width: '80vw',
    },
  },
  layout: {
    container: {},
  },
  forms: {
    label: {
      color: 'text',
      alignItems: 'center',
      fontWeight: 'bold',
      marginBottom: 2,
      textTransform: 'capitalize',
    },
    input: {
      color: 'text',
      caretColor: 'primary',
    },
    select: {
      color: 'text',
    },
    textarea: {
      color: 'text',
      caretColor: 'primary',
    },
    slider: {
      color: 'primary',
      backgroundColor: 'muted',
    },
    radio: {},
    checkbox: {},
  },
  badges: {
    primary: {
      backgroundColor: 'primary',
    },
    secondary: {
      backgroundColor: 'secondary',
      color: 'background',
    },
  },
  alerts: {
    primary: {
      backgroundColor: 'primary',
    },
    secondary: {
      backgroundColor: 'secondary',
      color: 'background',
    },
  },
  messages: {
    primary: {
      color: 'text',
      backgroundColor: 'darken',
      borderLeftColor: 'primary',
    },
    secondary: {
      color: 'text',
      backgroundColor: 'darken',
      borderLeftColor: 'secondary',
    },
  },
};
