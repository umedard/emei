import React from 'react'
import style from "./productSidebar.module.css"

export default function ProductSidebar() {
    return (
        <aside className={style.product}>
            <Product/>
        </aside>
    )
}



function Product(props) {
    return (
        <div>
            <div className={style.product__logo}>
                Logo
            </div>
            <div className={style.product__name}>
                Name
            </div>
            <div className={style.photo}>
                Product
            </div>

        </div>

    )
}


