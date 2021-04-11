import React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { useColorMode } from 'theme-ui';
import Theme from '../gatsby-plugin-theme-ui/index';

const SeoQuery = graphql`
  query DefaultSEOQuery {
    site: sanitySiteSettings(
      _id: { eq: "4626fe5d-367c-4dcb-932e-6a06f38ba4c8" }
    ) {
      keywords
      title {
        ar
        en
        fr
      }
      description {
        ar
        en
        fr
      }
      author {
        name {
          ar
          en
          fr
        }
      }
    }
  }
`;

function SEO({ description, lang, meta, keywords, title, image }) {
  const [colorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const themeColor = isDark
    ? Theme.colors.modes.dark.primary
    : Theme.colors.primary;
  const { site } = useStaticQuery(SeoQuery) || {};
  const metaDescription =
    description || site.description[lang] || site.description.en || '';
  const siteTitle = site.title[lang] || site.title.en || '';
  const siteAuthor = site.author.name[lang] || site.author.name.en || '';
  const seoTitle = `${title ? `${title} |` : ''} ${siteTitle}`;
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={seoTitle}
      meta={[
        {
          name: 'theme-color',
          content: themeColor,
        },
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: seoTitle,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: image || '',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: siteAuthor,
        },
        {
          name: 'twitter:title',
          content: seoTitle,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ]
        .concat(
          keywords && keywords.length > 0
            ? {
                name: 'keywords',
                content: keywords.join(', '),
              }
            : [
                {
                  name: 'keywords',
                  content: site.keywords.join(', '),
                },
              ]
        )
        .concat(meta || {})}
    />
  );
}

export default SEO;
