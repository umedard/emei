import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/pageHeader"
import Section from "../components/pageSection"
import Highlighted from "../components/highlighted"


export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
          <Highlighted text="News" imgUrl="/images/news.jpeg" url="/news" />
          <Header header={post.frontmatter.title}/>
          <Section section={post.html } />
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

  
