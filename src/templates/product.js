import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/pageHeader"
import Section from "../components/pageSection"
import Highlighted from "../components/highlighted"
import PageWrapper from "../components/pageWrapper"
import SEO from "../components/seo"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
          <Highlighted text="Products" imgUrl="/images/electornics.jpeg" url="/products" />
          <SEO title={post.frontmatter.title} />
          <PageWrapper>
            <Header header={post.frontmatter}/>
            <Section section={post.html } />
          </PageWrapper>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        language
        layout
        title
        category
      }
    }
  }
`

  
