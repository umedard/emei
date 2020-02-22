const path = require(`path`)


const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async function({ actions, graphql }) {
    const { data } = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                language
                layout
              }
            }
          }
        }
      }
    `)
    data.allMarkdownRemark.edges.forEach(edge => {
      const slug = edge.node.fields.slug

      switch (edge.node.frontmatter.layout) {
        case "pages":
          actions.createPage({
            path: slug,
            component: require.resolve(`./src/templates/pages.js`),
            context: { slug: slug },
          })
          break;

          case "news":
          actions.createPage({
            path: slug,
            component: require.resolve(`./src/templates/blog.js`),
            context: { slug: slug },
          })
          break;

          case "products":
          actions.createPage({
            path: slug,
            component: require.resolve(`./src/templates/product.js`),
            context: { slug: slug },
          })
          break;
      
        default:
          break;
      }
      
    })
  }