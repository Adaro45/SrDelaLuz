import React from 'react'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <div className='FooterContainer'>
        <div className="contant-details">
            <h3>Información de contacto</h3>
            <p>Emilio Carranza #38 col. Centro. CP.58500</p>
            <span>Frente al Santuario del Señor de la Salud  </span>
            <p>Michoacán - México </p>
            <span>WhatsApp: <b>+52438176443</b></span>
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
