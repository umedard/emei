import React from "react"
import style from "./footer.module.css"


const Footer = () => (
  <footer className={style.footer} >
    <p className={style.footer__copyright}>Copyright 2005-{new Date().getFullYear()} © Emei (HK) Electronics Ltd. All rights reserved.</p>
    <div className={style.logo}></div>
  </footer>
)

export default Footer













