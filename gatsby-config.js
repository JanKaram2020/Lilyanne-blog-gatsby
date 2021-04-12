const clientConfig = require('./client-config');

module.exports = {
  siteMetadata: {
    siteUrl: `https://lilyannehany.netlify.app/`,
    title: `Lilyanne Hany's blog`,
    description: `Lilyanne Hany's website including articles written by Lilyanne , about her and contact her`,
    author: `Jan Karam`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        watchMode: true,
      },
    },
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-B38TS2XQJB', // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
        name: `Lilyanne Hany's Blog`,
        short_name: `Lilyanne's blog`,
        description: `Lilyanne Hany's website including articles written by Lilyanne , about her and contact her`,
        lang: `en`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#ff613c`,
        display: `standalone`,
        theme_color_in_head: false, // This will avoid adding theme-color meta tag.
        localize: [
          {
            start_url: `/ar/`,
            lang: `ar`,
            name: `مدونة ليليان هاني`,
            short_name: `مدونة ليليان`,
            description: `موقع ليليان هاني يتضمن مقالات ليليان و معلومات عنها و التواصل معاها`,
          },
          {
            start_url: `/fr/`,
            lang: `fr`,
            name: `Blog de Lilyanne Hany`,
            short_name: `Le blog de Lilyanne`,
            description: `Site Web de Lilyanne Hany comprenant des articles écrits par Lilyanne, à son sujet et la contacter`,
          },
        ],
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: `en`,
        configPath: require.resolve(`./i18n/config.json`),
      },
    },
    {
      resolve: `gatsby-theme-i18n-react-i18next`,
      options: {
        locales: `./i18n/react-i18next`,
        i18nextOptions: {
          ns: ['404', 'Nav', 'Contact'],
        },
      },
    },
    'gatsby-plugin-theme-ui',
  ],
};
