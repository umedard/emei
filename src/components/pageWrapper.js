import React from 'react'
import style from './pageWrapper.module.css'

export default function pageWrapper({children}) {
    return (
        <main className={style.section} >
            {children}
        </main>
    )
}
