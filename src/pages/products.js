import React from "react"
import ProductList from "../components/productList"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"



const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .map(edge => <p>{edge.node.frontmatter.title}, {edge.node.frontmatter.language}</p>)
  return (<Layout>
  <SEO title="Home" />{Posts}
  
    <ProductList/>
    <ProductList/>
    
    </Layout>)
}


export default IndexPage


export const pageQuery = graphql`
  query Products{
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




