import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"

const StreamNotes = ({ data }) => {
  const note = data.mdx
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
      <MDXRenderer>{note.body}</MDXRenderer>
    </Layout>
  )
}

export default StreamNotes

export const query = graphql`
  query($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "ll")
        description
      }
    }
  }
`
