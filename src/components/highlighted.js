import React from 'react'
import {Link} from 'gatsby'
import style from './highlighted.module.css'

export default function highlighted({text, url, imgUrl}) {
    return (
        <div style={{backgroundImage: `url(${imgUrl})`}} className={style.highlighted__container}>
            <Link className={style.highlighted__link} to={url}>{text}</Link>
        </div>
    )
}
