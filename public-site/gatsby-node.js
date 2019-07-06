/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: "stream-notes" })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              category
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    const streamNotes = result.data.allMarkdownRemark.edges

    // Create the stream notes pages
    streamNotes.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve("./src/pages/stream-notes-detail-template.js"),
        context: {
          slug: node.fields.slug,
        },
      })
    })

    // Create the list of all categories
    const allCategories = streamNotes.reduce((acc, node) => {
      // If this post has a category, add it to the list
      if (node.frontmatter && node.frontmatter.category) {
        acc.push(node.frontmatter.category)
      }
      return acc
    }, [])

    // Eliminate any duplicate category entries
    const categories = [...new Set(allCategories)]

    // Create a page for each category
    categories.forEach(category => {
      createPage({
        path: `/categories/${category.toLowerCase()}-category/`,
        component: path.resolve("./src/pages/stream-notes-categories-index.js"),
        context: {
          category,
        },
      })
    })
  })
}
