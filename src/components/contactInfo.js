import React from 'react'
import style from './contactInfo.module.css'

export default function contactInfo({phone, fax, address, email, description}) {
    return (
        <div className={style.contact__details}>
           <p>Phone: {phone} </p> 
           <p>Fax: {fax} </p> 
           <p>Address: {address} </p> 
           <p>Email: {email} </p> 
           <p>{description}</p>
      </div>
    )
}
