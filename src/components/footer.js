import React from "react"
import style from "./footer.module.css"


const Footer = () => (
  <footer className={style.footer} >
    <div className={style.footer__logo}>
        logo
    </div>
    <p className={style.footer__description}>
        We provide Thermal Materials, EMI Shielding Materials, Polymer and Adhesives Materials, Insulation Materials,
        Inductive Components and Bulk Molding Compounds.
        Now, we are expanding to Building and Construction Materials.Our products gained quality certification
        and office networks in HK, Taiwan, Dongguan, Chengdu and Shanghai, Emei provides excellent
        value-added services including fabrication, adhesion, lamination, repackaging as well as
        3 dimensions delivery & technical advice service in the Greater China.
    </p>

    <div className={style.footer__links}>
          <ul className={style.list}>
            <li className={style.list__item}><span className={`${style.list__link} ${style.list__link_header}`} href="#X">About us</span></li>
            <li className={style.list__item}><a className={style.list__link} href="#X">About Us</a></li>
            <li className={style.list__item}><a className={style.list__link} href="#X">Our Factory</a></li>
            <li className={style.list__item}><a className={style.list__link} href="#X">Our Deliverables</a></li>
            <li className={style.list__item}><a className={style.list__link} href="#X">Our History</a></li>
          </ul>
          <ul className={style.list}>
            <li className={style.list__item}><a className={`${style.list__link} ${style.list__link_header}`} href="#X">Header</a></li>
            <li className={style.list__item}><a className={style.list__link} href="#X">Item</a></li>
            <li className={style.list__item}><a className={style.list__link} href="#X">Item</a></li>
            <li className={style.list__item}><a className={style.list__link} href="#X">Item</a></li>
            <li className={style.list__item}><a className={style.list__link} href="#X">Item</a></li>
          </ul>
    </div>

    <p className={style.footer__copyright}>Copyright 2005-{new Date().getFullYear()} © Emei (HK) Electronics Ltd. All rights reserved.</p>
 
  </footer>
)

export default Footer













