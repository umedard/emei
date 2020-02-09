import React from "react"
import footerStyles from "./footer.module.css"


const Footer = () => (
  <footer className={footerStyles.footer} >
    

    <p className={footerStyles.footer__copywright}>Copyright 2005-{new Date().getFullYear()} © Emei (HK) Electronics Ltd. All rights reserved.</p>
 
  </footer>
)

export default Footer













