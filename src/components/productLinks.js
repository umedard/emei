import React from 'react'
import style from "./productLinks.module.css"
import {Link} from 'gatsby'

export default function ProductLinks() {
    return (
        <ul className={style.list}>
            <LinkTo to="/about-us" text="Bisco® or Poron®"/>
            <LinkTo to="/about-us" text="RIC PORON"/>
            <LinkTo to="/about-us" text="Insulators"/>
            <LinkTo to="/about-us" text="Thermally Conductive Gap Fillers"/>
        </ul>
    )
}

function LinkTo({to, text}) {
    return (
    <li className={style.list__item}>>> <Link className={style.list__link} to={to}>{text}</Link></li>
    )
}

