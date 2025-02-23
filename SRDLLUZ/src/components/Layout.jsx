import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky-header">
        <nav>
          <Link to="/" className="logo">
            <img src="./images/isotiporecortado.png" alt="isotipo" className='isotipo-header' />
            <h1> SEÑOR DE LA SALUD</h1>

          </Link>
          
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
            <Link to="/productos-terminados" onClick={() => setIsMenuOpen(false)}>Productos</Link>
            <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}