import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"

const ProjectDetail = ({ data }) => {
  const project = data.mdx
  return (
    <Layout>
      <Helmet
        title={`${project.frontmatter.title} | Roberttables`}
        meta={[
          {
            name: "description",
            content: project.frontmatter.description,
          },
        ]}
      />
      <MDXRenderer>{project.body}</MDXRenderer>
    </Layout>
  )
}

export default ProjectDetail

export const query = graphql`
  query($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "ll")
        description
        title
      }
    }
  }
`
