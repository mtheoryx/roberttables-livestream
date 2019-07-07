/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  let slug
  if (node.internal.type === `MarkdownRemark`) {
    // Create slugs for posts
    if (node.fileAbsolutePath.includes("/stream-notes/")) {
      slug = createFilePath({ node, getNode })
      createNodeField({
        node,
        name: `slug`,
        value: `/stream-notes${slug}`,
      })
    } else if (node.fileAbsolutePath.includes("/projects/")) {
      slug = createFilePath({ node, getNode })
      createNodeField({
        node,
        name: `slug`,
        value: `/projects${slug}`,
      })
    } else if (node.fileAbsolutePath.includes("/equipment-and-software/")) {
      slug = createFilePath({ node, getNode })
      createNodeField({
        node,
        name: `slug`,
        value: `/tooling${slug}`,
      })
    }
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fileAbsolutePath
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      // Create the stream notes pages
      if (
        node.fileAbsolutePath &&
        node.fileAbsolutePath.includes("/stream-notes/")
      ) {
        createPage({
          path: node.fields.slug,
          component: path.resolve("./src/pages/stream-notes-template.js"),
          context: {
            slug: node.fields.slug,
          },
        })
      }

      // Create the projects pages
      if (
        node.fileAbsolutePath &&
        node.fileAbsolutePath.includes("/projects/")
      ) {
        createPage({
          path: node.fields.slug,
          component: path.resolve("./src/pages/projects-detail-template.js"),
          context: {
            slug: node.fields.slug,
          },
        })
      }

      // Create the tooling pages
    })
  })
}
