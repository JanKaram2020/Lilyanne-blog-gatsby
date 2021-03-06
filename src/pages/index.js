/** @jsx jsx */
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { graphql } from 'gatsby';
import { LocalizedLink, useLocalization } from 'gatsby-theme-i18n';
import { Button, Flex, Heading, jsx, useColorMode } from 'theme-ui';
import Layout from '../components/Layout';
import { Icon } from '../components/LogoSvg';
import PostPreview from '../components/PostPreview';
import SEO from '../components/Seo';
import TypedSentence from '../components/Typed';
import {
  see,
  latest,
  contact,
  hi,
  name,
  translator,
  writer,
  teacher,
  iam,
} from '../translations/index.translation';
// TODO consider refactoring all languages to use source form sanity
// TODO consider adding suggestions for other articles in bottom of an article
// markup
const IndexPage = ({ data }) => {
  const { locale } = useLocalization();
  const [colorMode] = useColorMode();
  const posts = data.allSanityPost.nodes;
  const currentPosts = posts
    .filter((post) => post.language === locale)
    .slice(0, 4);
  return (
    <Layout>
      <SEO lang={locale} />
      <Flex
        variant="flex.center"
        sx={{
          backgroundColor: 'darken',
          borderRadius: '10px',
          mx: '-10px',
          py: ['10px', null, 0],
        }}
      >
        <Flex
          variant="flex.center"
          sx={{
            display: ['none', null, 'flex'],
          }}
        >
          <StaticImage
            src="../images/trans.png"
            alt="Lilyanne Hany"
            height={250}
            layout="fixed"
            imgStyle={{
              filter: colorMode === 'dark' && 'brightness(85%)',
            }}
          />
        </Flex>
        <Flex variant="flex.centerColumn">
          <Heading as="h1">
            {hi[locale]} <span sx={{ display: 'none' }}> {name[locale]}</span>
          </Heading>
          <Icon
            style={{
              width: '200px',
            }}
          />
          <Heading variant="h2">
            {iam[locale]} &nbsp;
            <span sx={{ display: 'none' }}>
              {writer[locale]} , {translator[locale]}, {teacher[locale]}
            </span>
            <TypedSentence
              sentence={[
                `${writer[locale]}`,
                `${translator[locale]}`,
                `${teacher[locale]}`,
              ]}
            />
          </Heading>
          <Button as={LocalizedLink} to="/contact">
            {contact[locale]}
          </Button>
        </Flex>
      </Flex>
      <Flex variant="flex.centerColumn" as="section">
        <Heading sx={{ textAlign: 'center' }}>{latest[locale]}</Heading>
        <Flex
          variant="flex.center"
          sx={{
            flexDirection: ['column', 'row'],
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
