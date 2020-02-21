import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"


const News = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {layout: {eq: "news"}}}) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  
    return <Layout>
      <SEO title="News" />

      {data.allMarkdownRemark.edges.map((value, index) => {
        return <LinkTo key={index} to={value.node.fields.slug} text={value.node.frontmatter.title}/>
      })}
      
      </Layout>
}

export default News

function LinkTo({to, text}) {
  return (
  <li> <Link to={to}>{text}</Link></li>
  )
}





