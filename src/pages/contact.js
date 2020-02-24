import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Highlighted from "../components/highlighted"
import PageWrapper from "../components/pageWrapper"


const Contact = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {frontmatter: {layout: {eq: "contact"}}}, sort: {}) {
        edges {
          node {
            frontmatter {
              address
              fax
              phone
              location
            }
          }
        }
      }
    }
  `)
  const contact = data.allMarkdownRemark.edges[0].node.frontmatter;
  return (
    <Layout>
      <Highlighted text="Contact" imgUrl="/images/contact.jpeg" url="/contact" />
      <SEO title="Contact" />

       
          <PageWrapper>
   Tel: {contact.phone} 
</PageWrapper>

    </Layout>
 
    
    )
}

export default Contact








