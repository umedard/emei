import React from "react"
import ProductList from "../components/productList"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Highlighted from "../components/highlighted"


const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .map(edge => <p key={edge.node.frontmatter.title}>{edge.node.frontmatter.title}, {edge.node.frontmatter.language}</p>)
  return (<Layout>
     <Highlighted text="Welcome to EMEIL group" imgUrl="/images/emeigroup.jpg" url="/" />
  <SEO title="Home" />
  
  {Posts}
  
    <ProductList/>
    <ProductList/>
    
    </Layout>)
}


export default IndexPage


export const pageQuery = graphql`
  query homepage {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            language
          }
        }
      }
    }
  }
`




