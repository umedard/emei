import React from 'react'
import style from "./productLinks.module.css"
import {Link} from 'gatsby'


const productLinks = ({to, text}) => {
    return <li className={style.list__item}><Link className={style.list__link} to={to}>{text}</Link></li>
}

export default productLinks



