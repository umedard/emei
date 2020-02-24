import React from 'react'
import style from './contactForm.module.css'

export default function contactForm() {
    return (
        <form className={style.contact__form} name="contact" method="POST" data-netlify="true">
            <p>
              <label>Your Name: <br></br><input className={style.contact__text} type="text" name="name" /></label>   
            </p>
            <p>
              <label>Your Email: <br></br><input className={style.contact__email} type="email" name="email" /></label>
            </p>
            
            <p>
              <label>Message: <br></br><textarea className={style.contact__message} name="message"></textarea></label>
            </p>
            <p>
              <button className={style.contact__send} type="submit">Send</button>
            </p>
      </form>
    )
}
