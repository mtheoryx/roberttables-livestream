import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const CategoriesPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <Layout>
    <h1>Categories</h1>
    <ul>
      {group.map(category => (
        <li key={category.fieldValue}>
          <Link to={`/categories/${category.fieldValue.toLowerCase()}/`}>
            {category.fieldValue} ({category.totalCount})
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default CategoriesPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`
