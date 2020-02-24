import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Highlighted from "../components/highlighted"
import PageWrapper from "../components/pageWrapper"

const AboutUs = () => {
  const data = useStaticQuery(graphql`
    {
      
    allMarkdownRemark(filter: {frontmatter: {layout: {eq: "aboutus"}}}, sort: {}) {
      edges {
        node {
          html
        }
      }
    }
    }
  `)
  const graph = data.allMarkdownRemark.edges[0].node.html;
  return (
    <Layout>
      <Highlighted text="About Us" imgUrl="/images/aboutus.jpeg" url="/aboutus" />
      <SEO title="About Us" />
      <PageWrapper>
         <main dangerouslySetInnerHTML={{ __html: graph}}>
          
        </main>
      </PageWrapper>

         

    </Layout>
 
    
    )
}

export default AboutUs



