/** @jsx jsx */
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { graphql } from 'gatsby';
import { LocalizedLink, useLocalization } from 'gatsby-theme-i18n';
import { Button, Flex, Heading, Grid, jsx } from 'theme-ui';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import { Icon } from '../components/LogoSvg';
import PostPreview from '../components/PostPreview';
import SEO from '../components/Seo';
import TypedSentence from '../components/Typed';
import { see, latest, contact } from '../translations/index.translation';
// TODO consider refactoring all languages to use source form sanity
// TODO consider adding suggestions for other articles in bottom of an article
// markup
const IndexPage = ({ data }) => {
  const { locale } = useLocalization();
  const posts = data.allSanityPost.nodes;
  const currentPosts = posts
    .filter((post) => post.language === locale)
    .slice(0, 4);
  return (
    <Layout>
      <SEO lang={locale} />
      <Flex
        sx={{
          alignItems: ' center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          backgroundColor: 'darken',
          borderRadius: '10px',
          mx: '-10px',
        }}
      >
        <Flex sx={{ alignItems: ' center', justifyContent: 'center' }}>
          <StaticImage
            src="../images/trans.png"
            alt="Lilyanne Hany"
            height={250}
            layout="fixed"
          />
        </Flex>
        <Flex
          sx={{
            flexDirection: 'column',
            alignItems: ' center',
            justifyContent: 'center',
          }}
        >
          <h1 sx={{ p: 0, m: 0 }}>
            Hi I'm <span sx={{ display: 'none' }}> Lilyanne Hany</span>
          </h1>
          <Icon
            style={{
              width: '200px',
            }}
          />
          <h3 sx={{ p: 0, m: 0 }}>
            I am a &nbsp;
            <TypedSentence sentence={['translator.', 'writer.', 'teacher.']} />
          </h3>
          <Button as={LocalizedLink} to="/contact">
            {contact[locale]}
          </Button>
        </Flex>
      </Flex>
      <Flex
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyItems: 'center',
          gap: '10px',
        }}
        as="section"
      >
        <Heading as="h1" sx={{ textAlign: 'center' }}>
          {latest[locale]}
        </Heading>
        <Flex
          sx={{
            flexDirection: ['column', 'row'],
            flexWrap: 'wrap',
            gap: '10px',
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          {currentPosts.map((post, i) => (
            <PostPreview post={post} key={`${i} ${post._id}`} />
          ))}
        </Flex>
        <Button as={LocalizedLink} to="/blog" variant="secondary">
          {see[locale]}
        </Button>
      </Flex>
    </Layout>
  );
};
export const query = graphql`
  query PostsQuery {
    allSanityPost(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      totalCount
      nodes {
        _rawBody
        author {
          name {
            ar
            en
            fr
          }
        }
        categories {
          title {
            ar
            en
            fr
          }
          slug {
            current
          }
        }
        title
        mainImage {
          asset {
            gatsbyImageData(
              width: 900
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
          alt
        }
        slug {
          current
        }
        language
        publishedAt(formatString: "Do MM YYYY, h:mm a")
        _id
      }
    }
  }
`;
export default IndexPage;
