import React from "react"
import { graphql, Link } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../components/layout"

const ProjectsIndex = ({ data }) => {
  return (
    <Layout>
      <Helmet
        title="Projects | Roberttables"
        meta={[
          {
            name: "description",
            content: "Hardware and Software projects built on stream",
          },
        ]}
      />
      <h1>Projects</h1>
      <p>
        <em>
          Please note: I'm adding to this list... we have a lot of past projects
          to add since creating this site!
        </em>
      </p>
      <p>
        Here's a growing list of some of the hardware and software projects
        we've built on stream. Nearly 100% of these started as an idea, some
        very basic initial researc, and then learning together.
      </p>
      <p>
        In fact, this very site you're reading this on was imagined, built, and
        continues to evolve live on the stream.
      </p>
      <hr />
      {data.Projects.edges.map(({ node }) => (
        <React.Fragment key={node.id}>
          <div>
            <Link to={node.fields.slug}>
              {node.frontmatter.title} - {node.frontmatter.date}
            </Link>{" "}
            <br />
            {node.frontmatter.description}
            <br />
            Status: {node.frontmatter.complete ? "Complete" : "In-progress"}
          </div>
          <hr />
        </React.Fragment>
      ))}
    </Layout>
  )
}

export default ProjectsIndex

export const pageQuery = graphql`
  query {
    Projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            date
            title
            description
            complete
          }
          html
          fields {
            slug
          }
        }
      }
    }
  }
`
