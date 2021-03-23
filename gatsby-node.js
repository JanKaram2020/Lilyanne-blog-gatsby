const path = require(`path`);
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/Post.js`);

  const result = await graphql(`
    query {
      allSanityPost {
        totalCount
        nodes {
          body {
            _rawEn
            _rawAr
            _rawFr
          }
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
          }
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
  `);
  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.allSanityPost.nodes || [];
  posts.forEach((node) => {
    createPage({
      path: `post/${node.slug.current}`,
      component: blogPostTemplate,
      context: { slug: node.slug.current },
    });
  });
};
