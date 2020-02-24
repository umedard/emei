import React from 'react'
import style from './pageHeader.module.css'

export default function pageHeader({header}) {
    return (
        <div>
            <h1 className={style.header}>
            {header.title}
             </h1>
             { header.date && <h5> {header.date}</h5> }
             { header.category && <h5> {header.category}</h5> }
        </div>
        
    )
}
