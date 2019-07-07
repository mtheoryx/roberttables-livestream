import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../components/layout"

const EquipmentDetail = ({ data }) => {
  const equipment = data.markdownRemark
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
      <div dangerouslySetInnerHTML={{ __html: equipment.html }} />
    </Layout>
  )
}

export default EquipmentDetail

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        description
        title
        category
      }
    }
  }
`
