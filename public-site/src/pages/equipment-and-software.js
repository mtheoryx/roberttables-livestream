import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

const EquipmentAndSoftwareIndex = ({ data }) => (
  <Layout>
    <h1>Equipment and Software Used on Stream</h1>
    {data.Tools.edges.map(({ node }) => (
      <div key={node.id}>
        <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        <br />
        {node.frontmatter.description}
        Category: {node.frontmatter.category}
      </div>
    ))}
  </Layout>
)

export default EquipmentAndSoftwareIndex

export const pageQuery = graphql`
  query {
    Tools: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/equipment-and-software/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            category
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
