import React from 'react'
import style from "./productSidebar.module.css"
import { Link } from "gatsby"

export default function ProductSidebar() {
    return (
        <aside className={style.sidebar}>
            <p className={style.sidebar__header}>Product</p>
            <Product url="/Thermal_Management_Materials" name="Thermal Management Materials" photo="./images/logo.jpg"/>
        </aside>
    )
}



function Product({ url, name, photo}) {
    return (
        <Link className={style.product} to={url}>
            <div className={style.product__name}>
               {name}
            </div>
            <div >
                <img className={style.product__photo} src={photo} alt={name}/>
            </div>
        </Link>
    )
}


