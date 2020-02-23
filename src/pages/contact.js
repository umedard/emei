import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Highlighted from "../components/highlighted"

const ComponentName = () => {
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
      <Highlighted text="Contact" imgUrl="/images/contact_banner.jpg" url="/contact" />
      <SEO title="Contact" />
          Tel: {contact.phone} 

    </Layout>
 
    
    )
}

export default ComponentName








