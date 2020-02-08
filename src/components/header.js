import React from "react"
import headerStyles from "./header.module.css"
import Menu from './mainMenu'



const Header = () => (
  <header >
    <div className={headerStyles.header}>
      <div className={headerStyles.logo}>EmeiGroup</div>
      <div className={headerStyles.headerRight} >
        <div>中文 | English </div>
        <input className={headerStyles.search} type="text" placeholder="search"></input>
      </div>
    </div>

    <Menu />
  </header>
)

export default Header
