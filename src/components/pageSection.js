import React from 'react'
import style from './pageSection.module.css'

export default function pageSection({section}) {
    return (
        <main className={style.section} dangerouslySetInnerHTML={{ __html: section }}>
          
        </main>
    )
}
