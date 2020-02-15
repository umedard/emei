import React from "react"
import ProductList from "../components/productList"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <ProductList/>
    <ProductList/>

  </Layout>
)

export default IndexPage
