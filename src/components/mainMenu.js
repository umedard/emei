import React from "react"
import style from "./mainMenu.module.css"

const Menu = () => (
  <nav>
      <ul className={style.menu__list}>
          <li className={style.menu__item}><a className={style.menu__link} href="#x">Home</a></li>
          <li className={style.menu__item}><a className={style.menu__link} href="#x">About Us</a></li>
          <li className={style.menu__item}><a className={style.menu__link} href="#x">News</a></li>
          <li className={style.menu__item}><a className={style.menu__link} href="#x">Products</a></li>
          <li className={style.menu__item}><a className={style.menu__link} href="#x">Support</a></li>
          <li className={style.menu__item}><a className={style.menu__link} href="#x">Partners</a></li>
          {/* <li className={style.menu__item}><a className={style.menu__link} href="#x">Contact Us</a></li> */}
      </ul>
  </nav>
)

export default Menu