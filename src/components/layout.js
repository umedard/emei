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
          <main className={style.layout__main}>{children}</main>
<<<<<<< HEAD
          
=======
>>>>>>> b746b793f2867ab529d18a558128e49009a8e33c
          <Footer/>
      </div>
   
    </>
  )
}

export default Layout
