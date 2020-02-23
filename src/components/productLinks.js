import React from 'react'
import style from "./productLinks.module.css"
import {Link, useStaticQuery, graphql} from 'gatsby'


const LinkTo = ({to, text}) => {
    return (
    <li className={style.list__item}><Link className={style.list__link} to={to}>{text}</Link></li>
    )
}


export const BulkMoldingCompounds = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {layout: {}, category: {eq: "EMI Shielding Materials"}}}) {
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

