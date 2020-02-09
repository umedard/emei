import React from "react"
import Menu from './mainMenu'
import headerStyles from "./header.module.css"


const Header = () => (
  <header className={headerStyles.header} >
    <div className={headerStyles.header__wrapper}>
      <div className={headerStyles.header__logo}>EmeiGroup</div>
      <div className={headerStyles.header__searchBox} >
        <div className={headerStyles.header__language} >中文 | English </div>
        <input className={headerStyles.header__search} type="text" placeholder="search"></input>
      </div>
    </div>

    <Menu />
  </header>
)

export default Header
