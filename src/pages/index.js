import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Highlighted from "../components/highlighted"


export default function Index() {
  return (
    <Layout>
      <SEO title="Home" />
      <Highlighted text="Welcome to EMEI group" imgUrl="/images/electornics.jpeg" url="/" />
    </Layout>
  )
}