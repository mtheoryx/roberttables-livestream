import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"

const EquipmentDetail = ({ data }) => {
  const equipment = data.mdx
  return (
    <Layout>
      <Helmet
        title={`${equipment.frontmatter.title} | Roberttables`}
        meta={[
          {
            name: "description",
            content: equipment.frontmatter.description,
          },
        ]}
      />
      <MDXRenderer>{equipment.body}</MDXRenderer>
    </Layout>
  )
}

export default EquipmentDetail

export const query = graphql`
  query($slug: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        description
        title
        category
      }
    }
  }
`
