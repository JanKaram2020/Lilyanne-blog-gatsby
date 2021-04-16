import React from 'react';
import { graphql } from 'gatsby';
import { LocalizedLink, useLocalization } from 'gatsby-theme-i18n';
import { Flex, NavLink } from 'theme-ui';
import Layout from '../components/Layout';
import PostPreview from '../components/PostPreview';
import SEO from '../components/Seo';
import { blog as title } from '../translations/Nav.transaltion';
// TODO consider refactoring all languages to use source form sanity
// TODO fix errors here
// markup
const BlogPage = ({ data }) => {
  const { locale } = useLocalization();
  const categories = data.allSanityCategory.nodes;
  const langPosts = data.allSanityPost.nodes.filter(
    (post) => post.language === locale
  );
  return (
    <Layout>
      <SEO lang={locale} title={title[locale]} />
      <Flex sx={{ gap: '10px', height: '100%', mx: '-10px' }}>
        <Flex
          as="ul"
          sx={{
            flex: 1,
            flexDirection: 'column',
            listStyle: 'none',
            paddingLeft: '5px',
            backgroundColor: 'darken',
            minHeight: '100%',
          }}
        >
          {categories.map((category) => (
            <li>
              <NavLink
                as={LocalizedLink}
                to={`/blog/category/${category.slug.current}`}
              >
                {category.title[locale]}
              </NavLink>
            </li>
          ))}
        </Flex>
        <Flex
          sx={{
            flex: 5,
            flexDirection: ['column', 'row'],
            flexWrap: 'wrap',
            gap: '10px',
            alignContent: 'center',
          }}
          as="section"
        >
          {langPosts.map((post, i) => (
            <PostPreview post={post} key={`${i} ${post._id}`} />
          ))}
        </Flex>
      </Flex>
    </Layout>
  );
};
export const query = graphql`
  query BlogQuery {
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
          _id
          title {
            ar
            en
            fr
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
        publishedAt(formatString: "")
      }
    }
    allSanityCategory {
      nodes {
        id
        title {
          ar
          en
          fr
        }
        slug {
          current
        }
      }
    }
  }
`;
export default BlogPage;
