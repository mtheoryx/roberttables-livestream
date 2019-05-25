import React from "react"

import Layout from "../components/layout"
import Schedule from "../components/Schedule/Schedule"

const IndexPage = () => (
  <Layout>
    <h1>Welcome to the High Table.</h1>
    <h3>No business on company grounds.</h3>
    <p>It wasn't just a dog.</p>
    <Schedule />
  </Layout>
)

export default IndexPage
