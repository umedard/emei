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



function Product(props) {
    return (
        <Link className={style.product} to={props.url}>
            <div className={style.product__name}>
               {props.name}
            </div>
            <div >
                <img className={style.product__photo} src={props.photo} alt={props.name}/>
            </div>
        </Link>
    )
}


