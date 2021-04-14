import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { useLocalization } from 'gatsby-theme-i18n';
import { Flex, Button } from 'theme-ui';
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
  console.log('categories are', categories);
  const langPosts = data.allSanityPost.nodes.filter(
    (post) => post.language === locale
  );
  console.log('lang posts are', langPosts);
  const [posts, setPosts] = useState(langPosts);
  const filterCategories = (id) => {
    setPosts(langPosts.filter((post) => post.categories.title[locale] === id));
    console.log(posts);
  };
  return (
    <Layout>
      <SEO lang={locale} title={title[locale]} />
      {categories.map((category) => (
        <Button
          key={category.id}
          onClick={() => filterCategories(category.title[locale])}
        >
          {category.title[locale]}
        </Button>
      ))}
      <Flex
        sx={{
          flexDirection: ['column', 'row'],
          flexWrap: 'wrap',
          gap: '10px',
          alignContent: 'center',
          justifyContent: 'center',
        }}
        as="section"
      >
        {posts.map((post, i) => (
          <PostPreview post={post} key={`${i} ${post._id}`} />
        ))}
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
      }
    }
  }
`;
export default BlogPage;
