import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const StreamNotes = ({ data }) => {
  const note = data.markdownRemark
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: note.html }} />
    </Layout>
  )
}

export default StreamNotes

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
      }
    }
  }
`
