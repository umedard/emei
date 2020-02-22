import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Blog from "../components/blog"
import Blog_header from "../components/blogHeader"

const News = () => {
    return (
    <Layout>
        <SEO title="News" />
        <Blog_header />
        <Blog/>
    </Layout>
      )
}

export default News