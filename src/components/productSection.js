import React from 'react'
import style from './productSection.module.css'

export default function productSection({title, children, productComponent}) {
    return (
        <section className={style.product__section}>
            <div className={style.product__title}>{title}</div>
            <div className={style.product__wrapper}>
                <div className={style.product__component}>{productComponent}</div>
                <div className={style.product__children}>{children}</div>
            </div>
           
        </section>
    )
}
