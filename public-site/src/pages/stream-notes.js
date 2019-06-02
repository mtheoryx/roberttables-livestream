import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const StreamNotes = ({ data }) => {
  return (
    <Layout>
      <h1>Stream Notes Page!!</h1>
      <h2>June</h2>
      <p>{data.JuneStreamNotes.edges.length} Streams notes!</p>
      {data.JuneStreamNotes.edges.map(note => (
        <div key={note.node.id}>{note.node.headings[0].value}</div>
      ))}
      <hr />
      <h2>May</h2>
      <p>{data.MayStreamNotes.edges.length} Streams notes!</p>
      {data.MayStreamNotes.edges.map(note => (
        <div key={note.node.id}>{note.node.headings[0].value}</div>
      ))}
      <hr />
      <h2>April</h2>
      <p>{data.AprilStreamNotes.edges.length} Streams notes!</p>
      {data.AprilStreamNotes.edges.map(note => (
        <div key={note.node.id}>{note.node.headings[0].value}</div>
      ))}
      <hr />
      <h2>March</h2>
      <p>{data.MarchStreamNotes.edges.length} Streams notes!</p>
      {data.MarchStreamNotes.edges.map(note => (
        <div key={note.node.id}>{note.node.headings[0].value}</div>
      ))}
      <hr />
      <h2>February</h2>
      <p>{data.FebruaryStreamNotes.edges.length} Streams notes!</p>
      {data.FebruaryStreamNotes.edges.map(note => (
        <div key={note.node.id}>{note.node.headings[0].value}</div>
      ))}
      <hr />
      <h2>January</h2>
      <p>{data.JanuaryStreamNotes.edges.length} Streams notes!</p>
      {data.JanuaryStreamNotes.edges.map(note => (
        <div key={note.node.id}>{note.node.headings[0].value}</div>
      ))}
      <hr />
      <h2>December</h2>
      <p>{data.DecemberStreamNotes.edges.length} Streams notes!</p>
      {data.DecemberStreamNotes.edges.map(note => (
        <div key={note.node.id}>{note.node.headings[0].value}</div>
      ))}
    </Layout>
  )
}

export default StreamNotes

export const pageQuery = graphql`
  query {
    JuneStreamNotes: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/jun-2019/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          headings(depth: h1) {
            value
          }
        }
      }
    }
    MayStreamNotes: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/may-2019/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          headings(depth: h1) {
            value
          }
        }
      }
    }
    AprilStreamNotes: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/apr-2019/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          headings(depth: h1) {
            value
          }
        }
      }
    }
    MarchStreamNotes: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/mar-2019/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          headings(depth: h1) {
            value
          }
        }
      }
    }
    FebruaryStreamNotes: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/feb-2019/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          headings(depth: h1) {
            value
          }
        }
      }
    }
    JanuaryStreamNotes: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/jan-2019/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          headings(depth: h1) {
            value
          }
        }
      }
    }
    DecemberStreamNotes: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/dec-2018/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          headings(depth: h1) {
            value
          }
        }
      }
    }
  }
`
