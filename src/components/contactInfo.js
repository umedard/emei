import React from 'react'
import style from './contactInfo.module.css'

export default function contactInfo({phone, fax, address, email, description}) {
    return (
        <div className={style.contact__details}>
           <p>phone: </p>  {phone}
           <p>fax: {fax} </p> 
           <p>address: {address} </p> 
           <p>email: {email} </p> 
           <p>{description}</p>
      </div>
    )
}
