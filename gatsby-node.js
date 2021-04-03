const path = require(`path`);
const { isFuture } = require('date-fns');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/Post.js`);

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
    }
  `);
  if (result.errors) {
    throw result.errors;
  }
  const posts = result.data.allSanityPost.nodes || [];
  const currentPosts = posts.filter((node) => !isFuture(node.publishedAt));
  currentPosts.forEach((node) => {
    createPage({
      path: `post/${node.slug.current}`,
      component: blogPostTemplate,
      context: { slug: node.slug.current },
    });
  });
};
