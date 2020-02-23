import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Highlighted from "../components/highlighted"

const Partners = () => {
  const data = useStaticQuery(graphql`
    {
      
    allMarkdownRemark(filter: {frontmatter: {layout: {eq: "partners"}}}, sort: {}) {
      edges {
        node {
          frontmatter {
            description
          }
        }
      }
    }
    }
  `)
  const graph = data.allMarkdownRemark.edges[0].node.frontmatter;
  return (
    <Layout>
      <Highlighted text="Partners" imgUrl="/images/partners.jpeg" url="/partners" />
      <SEO title="Partners" />
          {graph.description}

    </Layout>
 
    
    )
}

export default Partners