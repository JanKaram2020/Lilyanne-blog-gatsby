/** @jsx jsx */
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
import { see, latest } from '../translations/index.translation';
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
      <Flex sx={{ alignItems: ' center', justifyContent: 'center' }}>
        <Grid
          sx={{
            gridTemplateColumns: '1fr',
            gridTemplateRows: '1fr',
            width: '350px',
          }}
        >
          <div
            style={{
              gridArea: '1 / 1 / 2 / 3',
              width: '350px',
              height: '180px',
              zIndex: '1',
            }}
          >
            <Logo />
          </div>
          <div
            sx={{
              gridArea: '1 / 1 / 2 / 3',
              width: '350px',
              height: '196px',
              zIndex: '2',
            }}
          >
            <Icon
              style={{
                width: '350px',
                height: '196px',
              }}
            />
          </div>
        </Grid>
      </Flex>
      <span>
        this is something &nbsp;
        <TypedSentence
          sentence={['this is me', 'this is something', 'this jan karam']}
        />
      </span>
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
