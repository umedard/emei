import React from "react"
import {Link} from 'gatsby'
import Menu from './mainMenu'
import style from "./header.module.css"


const Header = () => (
  <header className={style.header} >
    <div className={style.header__wrapper}>
      <Link to="/"><div className={style.header__logo}></div></Link>
      
      <div className={style.header__searchBox} >
        <div className={style.header__language} >{/* 中文 | English  */}</div>
        {/* <input className={style.header__search} type="text" placeholder="search"></input> */}
      </div>
    </div>

    <Menu />
  </header>
)

export default Header
