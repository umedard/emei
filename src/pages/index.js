import React from "react"
import ProductList from "../components/productList"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Highlighted from "../components/highlighted"


export default function Index() {
  return (
    <Layout>
      <SEO title="Home" />
      <Highlighted text="Welcome to EMEI group" imgUrl="/images/electornics.jpeg" url="/" />
      <ProductList/>
      <ProductList/>
    </Layout>
  )
}