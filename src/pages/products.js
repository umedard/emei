import React from "react"
import {BulkMoldingCompounds} from "../components/productLinks"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Highlighted from "../components/highlighted"


export default function Products() {
  return (
    <Layout>
      <SEO title="Home" />
      <Highlighted text="Products" imgUrl="/images/electornics.jpeg" url="/products" />
      <BulkMoldingCompounds/>
     
    </Layout>
  )
}






