import React from 'react'
import style from "./productLinks.module.css"
import {Link} from 'gatsby'

export default function ProductLinks() {
    return (
        <ul className={style.list}>
            <li className={style.list__item}>>> <Link className={style.list__link} to="">Bisco® or Poron®</Link></li>
            <li className={style.list__item}>>> <Link className={style.list__link} to="">RIC PORON</Link></li>
            <li className={style.list__item}>>> <Link className={style.list__link} to="">Insulators</Link></li>
            <li className={style.list__item}>>> <Link className={style.list__link} to="">Thermally Conductive Gap Fillers</Link></li>
        </ul>
    )
}
