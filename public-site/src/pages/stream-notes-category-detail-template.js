import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const Category = ({ pageContext, data }) => {
  const { category } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const categoryHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } with category "${category}"`
  return (
    <Layout>
      <h1>${categoryHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { description } = node.frontmatter
          const { value } = node.headings
          return (
            <li key={slug}>
              <Link to={slug}>{value}</Link>
              <br />
              {description}
            </li>
          )
        })}
      </ul>
      <hr />
      <Link to="/tags">All Categories</Link>
    </Layout>
  )
}

export default Category

export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            description
          }
          headings(depth: h1) {
            value
          }
        }
      }
    }
  }
`
