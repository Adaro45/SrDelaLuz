import '../styles/Contact.css';

export default function Contact() {
  const phoneNumber = "+52438176443";

  return (
    <div className='contact-background'>
    <div className="contact-container">
      <div className="contact-content">
      <img 
              src="/images/LOGO.png" 
              alt="LOGO" 
              className="logo-image-contact"
            />
        <p>Contáctanos:</p>
        
        <div className="contact-info">
          <p>📞 Tel: <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">{phoneNumber}</a></p>
          <p>📍Emilio Carranza #38 col. Centro. CP.58500</p>
            <span>Frente al Santuario del Señor de la Salud  </span>
            <p>Michoacán - México </p>
        </div>

        <div className="contact-buttons">
          <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" className="contact-button whatsapp">
            Chatear por WhatsApp
          </a>
        </div>
      </div>
      <img 
        src="/images/ISOTIPO.png" 
        alt="Isotipo" 
        className="logo-image-contact isotipo"
      />
    </div>
    </div>
  );
}
