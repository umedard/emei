import React from 'react'
import style from "./productLinks.module.css"
import {Link, useStaticQuery, graphql} from 'gatsby'

function ProductLinks() {
    return (
        <ul className={style.list}>
            <LinkTo to="/about-us" text="Bisco® or Poron®"/>
        </ul>
    )
}

function LinkTo({to, text}) {
    return (
    <li className={style.list__item}><Link className={style.list__link} to={to}>{text}</Link></li>
    )
}


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
            return <LinkTo key={index} to={value.node.fields.slug} text={value.node.frontmatter.title} date={value.node.frontmatter.date} excerpt={value.node.excerpt}/>
          })}
      </section>
      
      
      )
}

export default BulkMoldingCompounds