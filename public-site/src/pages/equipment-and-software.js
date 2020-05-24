import React from "react"
import { graphql, Link } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../components/layout"

const EquipmentAndSoftwareIndex = ({ data }) => (
  <Layout>
    <Helmet
      title="Equipment & Software | Roberttables"
      meta={[
        {
          name: "description",
          content: "Equipment and Software Used on Stream",
        },
      ]}
    />
    <h1>Equipment and Software Used on Stream</h1>
    {data.allMdx.nodes.map(node => (
      <React.Fragment key={node.id}>
        <div>
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          <br />
          {node.frontmatter.description}
          <br />
          Category: {node.frontmatter.category}
        </div>
        <hr />
      </React.Fragment>
    ))}
  </Layout>
)

export default EquipmentAndSoftwareIndex

export const pageQuery = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/equipment-and-software/" } }
    ) {
      nodes {
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
`
