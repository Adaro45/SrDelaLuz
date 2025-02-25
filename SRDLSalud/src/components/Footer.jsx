import React from 'react'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <div className='FooterContainer'>
        <div className="contant-details">
            <h3>Información de contacto</h3>
            <p>Av. 10 de Agosto N24-10 y Av. Colón</p>
            <p>Michoacán - México </p>
            <span>WhatsApp: +52438176443</span>
        </div>
        <div className='logo-footer-container'>
        <img src="./images/LOGO.png" alt="logo" className='logo-footer'/>
            <h3>© 2025</h3>
        </div>
        <div className='FooterContent'>
            <p>Colaborando con <a target="_blank" href='https://romanacentro.com/'>romanacentro.com</a></p>
        </div>
    </div>
  )
}
