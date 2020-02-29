import React from 'react'

import style from './contactInfo.module.css'
// SVG icons
import fax_icon from '../../static/assets/fax.svg'
import address_icon from '../../static/assets/address.svg'
import mail_icon from '../../static/assets/mail.svg'
import phone_icon from '../../static/assets/phone.svg'


export default function contactInfo({phone, fax, address, email, description}) {
    return (
        <div>
             <div className={style.contact__details}>
                <ContactItem icon={phone_icon} data={phone}></ContactItem>
                <ContactItem icon={fax_icon} data={fax}></ContactItem>
                <ContactItem icon={address_icon} data={address}></ContactItem>
                <ContactItem icon={mail_icon} data={email}></ContactItem> 
            </div>
            <p className={style.contact__description}>{description}</p>
        </div>
       
    )
}

function ContactItem({icon, data}) {
    return (
        <div className={style.contact__item}>
            <img className={style.contact__icon} height="25px" width="25px"  src={icon} /> 
            <div className={style.contact__data}> {data} </div> 
        </div>
    )
}
