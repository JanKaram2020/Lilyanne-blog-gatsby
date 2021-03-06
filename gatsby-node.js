const path = require(`path`);
const { isFuture, parseISO } = require('date-fns');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/Post.js`);
  const categoryTemplate = path.resolve(`src/templates/Category.js`);

  const result = await graphql(`
    {
      allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        nodes {
          slug {
            current
          }
          publishedAt
        }
      }
      allSanityCategory {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);
  if (result.errors) {
    throw result.errors;
  }
  const posts = result.data.allSanityPost.nodes || [];
  const currentPosts = posts.filter(
    (node) => !isFuture(parseISO(node.publishedAt))
  );
  currentPosts.forEach((node) => {
    createPage({
      path: `blog/post/${node.slug.current}`,
      component: blogPostTemplate,
      context: { slug: node.slug.current },
    });
  });
  const categories = result.data.allSanityCategory.nodes || [];
  categories.forEach((node) => {
    createPage({
      path: `blog/category/${node.slug.current}`,
      component: categoryTemplate,
      context: { slug: node.slug.current },
    });
  });
};
