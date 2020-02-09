import React from "react"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import layoutStyles from "./layout.module.css"

const Layout = ({ children }) => {
  return (
    <>
     
      <div className={layoutStyles.layout}> 
          <Header/>
          <main>{children}</main>
          <Footer/>
      </div>
   
    </>
  )
}

export default Layout
