import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Highlighted from "../components/highlighted"
import Blog from "../components/blogHomePage"
import PageWrapper from "../components/pageWrapper"


export default function Index() {
  return (
    <Layout>
      <SEO title="Home" />
      <Highlighted text="Welcome to EMEI group" imgUrl="/images/hardware.jpeg" url="/" />
      <PageWrapper>
 <Blog/>
</PageWrapper>
     
    </Layout>
  )
}