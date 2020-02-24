import React from "react"
import {BulkMoldingCompounds} from "../components/productLinks"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Highlighted from "../components/highlighted"
import PageWrapper from "../components/pageWrapper"


export default function Products() {
  return (
    <Layout>
      <SEO title="Products" />
      <Highlighted text="Products" imgUrl="/images/electornics.jpeg" url="/products" />
      <PageWrapper>
 <BulkMoldingCompounds/>
</PageWrapper>
     
     
    </Layout>
  )
}






