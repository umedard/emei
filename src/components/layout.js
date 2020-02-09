import React from "react"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import style from "./layout.module.css"

const Layout = ({ children }) => {
  return (
    <>
     
      <div className={style.layout}> 
          <Header/>
          <main>{children}</main>
          <Footer/>
      </div>
   
    </>
  )
}

export default Layout
