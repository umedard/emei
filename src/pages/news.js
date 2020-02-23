import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Blog from "../components/blog"
import BlogHeader from "../components/blogHeader"
import Highlighted from "../components/highlighted"

const News = () => {
    return (
    <Layout>
        <SEO title="News" />
        <Highlighted text="News" imgUrl="/images/news.jpeg" url="/news" />
        <BlogHeader />
        <Blog/>
    </Layout>
      )
}

export default News