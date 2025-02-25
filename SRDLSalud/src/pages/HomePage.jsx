import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';
import '../styles/HomePage.css';

export default function HomePage() {
  const Espejos = [
     "/images/photos/Espejos/1.webp", 
     "/images/photos/Espejos/2.webp", 
     "/images/photos/Espejos/3.webp", 
     "/images/photos/Espejos/4.webp", 
     "/images/photos/Espejos/5.webp", 
  ];
  
  const Colgantes = [
     "/images/photos/Colgantes/1.webp",
     "/images/photos/Colgantes/2.webp",
     "/images/photos/Colgantes/3.webp",
     "/images/photos/Colgantes/4.webp",
     "/images/photos/Colgantes/5.webp",
     "/images/photos/Colgantes/6.webp",
  ];
  
  const Grandes = [
    "/images/photos/Grandes/1.webp", 
    "/images/photos/Grandes/2.webp", 
    "/images/photos/Grandes/3.webp", 
    "/images/photos/Grandes/4.webp", 
    "/images/photos/Grandes/5.webp", 
    "/images/photos/Grandes/6.webp", 
    "/images/photos/Grandes/7.webp", 
    "/images/photos/Grandes/8.webp", 
  ];
  
  const Medianos = [
     "/images/photos/Medianos/1.webp", 
     "/images/photos/Medianos/2.webp", 
     "/images/photos/Medianos/3.webp", 
     "/images/photos/Medianos/4.webp", 
     "/images/photos/Medianos/5.webp", 
     "/images/photos/Medianos/6.webp", 
     "/images/photos/Medianos/7.webp", 
     "/images/photos/Medianos/8.webp", 
     "/images/photos/Medianos/9.webp", 
     "/images/photos/Medianos/10.webp",
  ];
  
  const Pequeños = [
     "/images/photos/Pequeños/1.webp", 
     "/images/photos/Pequeños/2.webp", 
     "/images/photos/Pequeños/3.webp", 
     "/images/photos/Pequeños/4.webp", 
     "/images/photos/Pequeños/5.webp", 
     "/images/photos/Pequeños/6.webp", 
     "/images/photos/Pequeños/7.webp", 
     "/images/photos/Pequeños/8.webp", 
     "/images/photos/Pequeños/9.webp", 
     "/images/photos/Pequeños/10.webp",
     "/images/photos/Pequeños/11.webp",
     "/images/photos/Pequeños/12.webp", 
    "/images/photos/Pequeños/13.webp",
     "/images/photos/Pequeños/14.webp",
  ];
  
  // Combinamos todos los productos en un solo arreglo
  const sliderImages = [
    ...Espejos,
    ...Colgantes,
    ...Grandes,
    ...Medianos,
    ...Pequeños,
  ];
  
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <div className="home-container">
        
      <section className="hero">
        <img src="/images/catedral.jpg" className="hero-image" alt="Fondo Catedral" />
        <div className="hero-overlay">
          <div className="hero-right">
            <div className="product-slider">
              <img src={sliderImages[currentSlide]} alt="Producto Religioso" className="slider-image" />
            </div>
              <div className="slider-description">
                <p>Descubre productos que elevan tu espíritu y embellecen tu entorno.</p>
              </div>
          <div className="cta-buttons">
            <Link to="/productos-terminados" className="btn-secondary">Ver Catálogo</Link>
          </div>
          </div>
        </div>
          <div className="hero-left">
            <div className="site-description">
              <h2>Bienvenido a Nuestro Sitio</h2>
              <img src="/images/srdelasalud.jpg" alt="logo" className='logotipo' />
          <div className="cta-buttons">
              <p>
                Aquí encontrarás una amplia gama de artículos religiosos , seleccionados cuidadosamente para inspirar y enriquecer tu fe.
              </p>
            <Link to="/contacto" className="btn-primary">Contáctanos Directamente</Link>
            </div>
          </div>
          </div>
      </section>
    </div>
  );
}
