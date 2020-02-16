import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/pageHeader"
import Section from "../components/pageSection"
export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
          <Header header={post.frontmatter.title}/>
          <Header header={post.frontmatter.category}/>
          <Section section={post.html } />
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

  
