import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import style from "./blogHeader.module.css"
import styleBlog from "./blog.module.css"


const News = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {frontmatter: {layout: {eq: "news"}}}, limit: 1, sort: {order: DESC, fields: [frontmatter___date]}) {
        edges {
          node {
            id
            excerpt(pruneLength: 700)
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              thumbnail
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
        <div className={style.link__list}>
          {data.allMarkdownRemark.edges.map((value, index) => {
            return <LinkTo key={index} to={value.node.fields.slug} text={value.node.frontmatter.title} date={value.node.frontmatter.date} excerpt={value.node.excerpt} thumbnail={value.node.frontmatter.thumbnail}/>
          })}
        </div>
      )
}

export default News

function LinkTo({to, text, date, excerpt, thumbnail}) {
  return (
     <Link className={styleBlog.link__item} to={to}>
        <div className={styleBlog.link__text}>{text}</div> 
        
        <div className={styleBlog.link__excerpt}>
            <img className={style.link__thumbnail} src={thumbnail} alt={text}/>   
            {excerpt}
        </div> 
        <div className={styleBlog.link__date}>{date}</div> 
      </Link>
  )
}






