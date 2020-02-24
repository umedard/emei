import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Highlighted from "../components/highlighted"
import PageWrapper from "../components/pageWrapper"

import style from './contact.module.css'


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
              email
            }
          }
        }
      }
    }
  `)
  const {phone, fax, address, email} = data.allMarkdownRemark.edges[0].node.frontmatter;
  return (
    <Layout>
      <Highlighted text="Contact" imgUrl="/images/contact.jpeg" url="/contact" />
      <SEO title="Contact" />

       
          <PageWrapper>
   
   <div className={style.contact__wrapper}>
      <div className={style.contact__details}>
           <p>Tel: {phone} </p> 
           <p>Fax: {fax} </p> 
           <p>Address: {address} </p> 
           <p>Email {email} </p> 
     
      </div>

      <form className={style.contact__form} name="contact" method="POST" data-netlify="true">
            <p>
              <label>Your Name: <br></br><input type="text" name="name" /></label>   
            </p>
            <p>
              <label>Your Email: <br></br><input type="email" name="email" /></label>
            </p>
            
            <p>
              <label>Message: <br></br><textarea name="message"></textarea></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
      </form>
   </div>

</PageWrapper>

    </Layout>
 
    
    )
}

export default Contact








