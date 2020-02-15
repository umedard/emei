import React from 'react'
import { Link } from "gatsby"
import ProductLinks from './productLinks'
import style from "./productList.module.css"

export default function ProductList() {
    return (
        <aside className={style.list}>
            <Product url="/Thermal_Management_Materials" name="Thermal Management Materials" photo="./images/logo.jpg"/>
        </aside>
    )
}



function Product(props) {
    return (
        <section>
            <Link className={style.product} to={props.url}>
                <div className={style.product__name}>
                {props.name}
                </div>
                <div >
                    <img className={style.product__photo} src={props.photo} alt={props.name}/>
                </div>
                
            </Link>
            <ProductLinks/>
        </section>
        
    )
}


