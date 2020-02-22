import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Blog from "../components/blog"
import BlogHeader from "../components/blogHeader"

const News = () => {
    return (
    <Layout>
        <SEO title="News" />
        <BlogHeader />
        <Blog/>
    </Layout>
      )
}

export default News