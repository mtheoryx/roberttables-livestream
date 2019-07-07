import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../components/layout"

const ProjectDetail = ({ data }) => {
  const project = data.markdownRemark
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
      <div dangerouslySetInnerHTML={{ __html: project.html }} />
    </Layout>
  )
}

export default ProjectDetail

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "ll")
        description
        title
      }
    }
  }
`
