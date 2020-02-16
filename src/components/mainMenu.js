import React from "react"
import {Link} from "gatsby"
import style from "./mainMenu.module.css"


const Menu = () => (
  <nav>
      <ul className={style.menu__list}>
          <li className={style.menu__item}><Link to="/" className={style.menu__link}>Home</Link></li>
          <li className={style.menu__item}><Link to="/about-us" className={style.menu__link}>About Us</Link></li>
          <li className={style.menu__item}><Link to="/news" className={style.menu__link}>News</Link></li>
          <li className={style.menu__item}><Link to="/products" className={style.menu__link}>Products</Link></li>
          <li className={style.menu__item}><Link to="/partners" className={style.menu__link}>Partners</Link></li>
          <li className={style.menu__item}><Link to="/contact" className={style.menu__link}>Contact</Link></li>
          {/* <li className={style.menu__item}><<Link to="/" className={style.menu__link}>Contact Us</Link></li> */}
      </ul>
  </nav>
)

export default Menu


