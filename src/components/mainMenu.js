import React from "react"
import menuStyles from "./mainMenu.module.css"

const Menu = () => (
  <nav>
      <ul className={menuStyles.menu__list}>
          <li className={menuStyles.menu__item}><a className={menuStyles.menu__link} href="">Home</a></li>
          <li className={menuStyles.menu__item}><a className={menuStyles.menu__link} href="">About Us</a></li>
          <li className={menuStyles.menu__item}><a className={menuStyles.menu__link} href="">News</a></li>
          <li className={menuStyles.menu__item}><a className={menuStyles.menu__link} href="">Products</a></li>
          <li className={menuStyles.menu__item}><a className={menuStyles.menu__link} href="">Support</a></li>
          <li className={menuStyles.menu__item}><a className={menuStyles.menu__link} href="">Partners</a></li>
          <li className={menuStyles.menu__item}><a className={menuStyles.menu__link} href="">Contact Us</a></li>
      </ul>
  </nav>
)

export default Menu