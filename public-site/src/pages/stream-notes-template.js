import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../components/layout"

const StreamNotes = ({ data }) => {
  const note = data.markdownRemark
  return (
    <Layout>
      <Helmet
        title={`${note.frontmatter.date} Stream Notes | Roberttables`}
        meta={[
          {
            name: "description",
            content: note.frontmatter.description,
          },
        ]}
      />
      <div dangerouslySetInnerHTML={{ __html: note.html }} />
    </Layout>
  )
}

export default StreamNotes

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "ll")
        description
      }
    }
  }
`
