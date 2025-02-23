import '../styles/Contact.css';

export default function Contact() {
  const phoneNumber = "+52438176443";
  const email = "romanacentro@yahoo.com";

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
          <p>📧 Email: <a href={`mailto:${email}`}>{email}</a></p>
          <p>📍 Dirección: Donceles 74, Interior Local 10A, CDMX</p>
        </div>

        <div className="contact-buttons">
          <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" className="contact-button whatsapp">
            Chatear por WhatsApp
          </a>
          {/* <a href={`mailto:${email}`} className="contact-button email">
            Enviar Correo
          </a> */}
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
