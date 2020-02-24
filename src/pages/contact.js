import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Highlighted from "../components/highlighted"
import PageWrapper from "../components/pageWrapper"
import ContactForm from "../components/contactForm"
import ContactInfo from "../components/contactInfo"

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
              description
            }
          }
        }
      }
    }
  `)
  const { phone, fax, address, email, description } = data.allMarkdownRemark.edges[0].node.frontmatter;
  return (
    <Layout>
      <Highlighted text="Contact" imgUrl="/images/contact.jpeg" url="/contact" />
      <SEO title="Contact" />
      <PageWrapper>
        <div className={style.contact__wrapper}>
          <ContactInfo phone={phone} fax={fax} address={address} email={email} description={description} />
          <ContactForm />
        </div>
      </PageWrapper>
    </Layout>
  )
}

export default Contact








