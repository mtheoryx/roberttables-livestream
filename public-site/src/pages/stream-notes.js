import React from "react"
import { graphql, Link } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../components/layout"

const StreamNotes = ({ data }) => {
  // @TODO: use a hook for software/hardware toggle state? Update, category pages
  // @TODO: use tag state, perhaps different page? Update: yes, tag pages
  return (
    <Layout>
      <Helmet
        title="Livestream Notes | Roberttables"
        meta={[
          {
            name: "description",
            content: "Stream notes",
          },
        ]}
      />
      <h1>LiveStream Notes</h1>
      {/* @TODO: Add the state toggle for all, software, hardware */}
      <h2>August</h2>
      <p>{data.AugustStreamNotes.nodes.length} Streams notes!</p>
      <ul>
        {data.AugustStreamNotes.nodes.map(node => (
          <li key={node.id}>
            <Link to={node.fields.slug}>{node.headings[0].value}</Link> -{" "}
            {node.frontmatter.category}
          </li>
        ))}
      </ul>

      <hr />
      <h2>July</h2>
      <p>{data.JulyStreamNotes.nodes.length} Streams notes!</p>
      <ul>
        {data.JulyStreamNotes.nodes.map(node => (
          <li key={node.id}>
            <Link to={node.fields.slug}>{node.headings[0].value}</Link> -{" "}
            {node.frontmatter.category}
          </li>
        ))}
      </ul>

      <hr />
      <h2>June</h2>
      <p>{data.JuneStreamNotes.nodes.length} Streams notes!</p>
      <ul>
        {data.JuneStreamNotes.nodes.map(node => (
          <li key={node.id}>
            <Link to={node.fields.slug}>{node.headings[0].value}</Link> -{" "}
            {node.frontmatter.category}
          </li>
        ))}
      </ul>

      <hr />
      <h2>May</h2>
      <p>{data.MayStreamNotes.nodes.length} Streams notes!</p>
      <ul>
        {data.MayStreamNotes.nodes.map(node => (
          <li key={node.id}>
            <Link to={node.fields.slug}>{node.headings[0].value}</Link> -{" "}
            {node.frontmatter.category}
          </li>
        ))}
      </ul>
      <hr />
      <h2>April</h2>
      <p>{data.AprilStreamNotes.nodes.length} Streams notes!</p>
      <ul>
        {data.AprilStreamNotes.nodes.map(node => (
          <li key={node.id}>
            <Link to={node.fields.slug}>{node.headings[0].value}</Link> -{" "}
            {node.frontmatter.category}
          </li>
        ))}
      </ul>
      <hr />
      <h2>March</h2>
      <p>{data.MarchStreamNotes.nodes.length} Streams notes!</p>
      <ul>
        {data.MarchStreamNotes.nodes.map(node => (
          <li key={node.id}>
            <Link to={node.fields.slug}>{node.headings[0].value}</Link> -{" "}
            {node.frontmatter.category}
          </li>
        ))}
      </ul>
      <hr />
      <h2>February</h2>
      <p>{data.FebruaryStreamNotes.nodes.length} Streams notes!</p>
      <ul>
        {data.FebruaryStreamNotes.nodes.map(node => (
          <li key={node.id}>
            <Link to={node.fields.slug}>{node.headings[0].value}</Link> -{" "}
            {node.frontmatter.category}
          </li>
        ))}
      </ul>
      <hr />
      <h2>January</h2>
      <p>{data.JanuaryStreamNotes.nodes.length} Streams notes!</p>
      <ul>
        {data.JanuaryStreamNotes.nodes.map(node => (
          <li key={node.id}>
            <Link to={node.fields.slug}>{node.headings[0].value}</Link> -{" "}
            {node.frontmatter.category}
          </li>
        ))}
      </ul>
      <hr />
      <h2>December</h2>
      <p>{data.DecemberStreamNotes.nodes.length} Streams notes!</p>
      <ul>
        {data.DecemberStreamNotes.nodes.map(node => (
          <li key={node.id}>
            <Link to={node.fields.slug}>{node.headings[0].value}</Link> -{" "}
            {node.frontmatter.category}
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default StreamNotes

export const pageQuery = graphql`
  query {
    AugustStreamNotes: allMdx(
      filter: { fileAbsolutePath: { regex: "/aug-2019/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        id
        excerpt
        frontmatter {
          category
        }
        headings(depth: h1) {
          value
        }
        fields {
          slug
        }
      }
    }
    JulyStreamNotes: allMdx(
      filter: { fileAbsolutePath: { regex: "/jul-2019/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        id
        excerpt
        frontmatter {
          category
        }
        headings(depth: h1) {
          value
        }
        fields {
          slug
        }
      }
    }
    JuneStreamNotes: allMdx(
      filter: { fileAbsolutePath: { regex: "/jun-2019/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        id
        excerpt
        frontmatter {
          category
        }
        headings(depth: h1) {
          value
        }
        fields {
          slug
        }
      }
    }
    MayStreamNotes: allMdx(
      filter: { fileAbsolutePath: { regex: "/may-2019/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        id
        excerpt
        frontmatter {
          category
        }
        headings(depth: h1) {
          value
        }
        fields {
          slug
        }
      }
    }
    AprilStreamNotes: allMdx(
      filter: { fileAbsolutePath: { regex: "/apr-2019/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        id
        excerpt
        frontmatter {
          category
        }
        headings(depth: h1) {
          value
        }
        fields {
          slug
        }
      }
    }
    MarchStreamNotes: allMdx(
      filter: { fileAbsolutePath: { regex: "/mar-2019/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        id
        excerpt
        frontmatter {
          category
        }
        headings(depth: h1) {
          value
        }
        fields {
          slug
        }
      }
    }
    FebruaryStreamNotes: allMdx(
      filter: { fileAbsolutePath: { regex: "/feb-2019/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        id
        excerpt
        frontmatter {
          category
        }
        headings(depth: h1) {
          value
        }
        fields {
          slug
        }
      }
    }
    JanuaryStreamNotes: allMdx(
      filter: { fileAbsolutePath: { regex: "/jan-2019/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        id
        excerpt
        frontmatter {
          category
        }
        headings(depth: h1) {
          value
        }
        fields {
          slug
        }
      }
    }
    DecemberStreamNotes: allMdx(
      filter: { fileAbsolutePath: { regex: "/dec-2018/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        id
        excerpt
        frontmatter {
          category
        }
        headings(depth: h1) {
          value
        }
        fields {
          slug
        }
      }
    }
  }
`
