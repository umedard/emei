import React from "react"
import {Link} from "gatsby"
import style from "./mainMenu.module.css"


const Menu = () => (
  <nav>
      <ul className={style.menu__list}>
           <LinkTo to="/" text="Home"/>
           <LinkTo to="/about-us" text="About Us"/>
           <LinkTo to="/news" text="News"/>
           <LinkTo to="/products" text="Products"/>
           <LinkTo to="/partners" text="Partners"/>
           <LinkTo to="/contact" text="Contact"/>
      </ul>
  </nav>
)

export default Menu

function LinkTo({to, text}) {
  return (
  <li className={style.menu__item}><Link className={style.menu__link} to={to}>{text}</Link></li>
  )
}



