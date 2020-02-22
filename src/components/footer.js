import React from "react"
import style from "./footer.module.css"


const Footer = () => (
  <footer className={style.footer} >

   

    {/* <p className={style.footer__description}>
        We provide Thermal Materials, EMI Shielding Materials, Polymer and Adhesives Materials, Insulation Materials,
        Inductive Components and Bulk Molding Compounds.
        Now, we are expanding to Building and Construction Materials.Our products gained quality certification
        and office networks in HK, Taiwan, Dongguan, Chengdu and Shanghai, Emei provides excellent
        value-added services including fabrication, adhesion, lamination, repackaging as well as
        3 dimensions delivery & technical advice service in the Greater China.
    </p> */}

   

    <p className={style.footer__copyright}>Copyright 2005-{new Date().getFullYear()} © Emei (HK) Electronics Ltd. All rights reserved.</p>

    {/* Footer logo */}
    <div className={style.logo}></div>
 
  </footer>
)

export default Footer













