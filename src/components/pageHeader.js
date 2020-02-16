import React from 'react'
import style from './pageHeader.module.css'

export default function pageHeader({header}) {
    return (
        <h1 className={style.header}>
            {header}
        </h1>
    )
}
