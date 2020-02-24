import React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import LinkTo from '../productLinks'


 const BulkMoldingCompounds = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {layout: {}, category: {eq: "Bulk Molding Compounds"}}}) {
        edges {
          node {
            frontmatter {
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
  return (
      <section>
          {data.allMarkdownRemark.edges.map((value, index) => {
            return <LinkTo key={index} to={value.node.fields.slug} text={value.node.frontmatter.title} />
          })}
      </section>
      
      
      )
}

export default BulkMoldingCompounds
