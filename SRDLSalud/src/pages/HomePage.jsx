import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "../components/ScrollAnimation";
import "../styles/HomePage.css";

export default function HomePage() {
  const Imagenes_Religiosas = [
    "/images/photos/Imagenes_Religiosas/1.webp",
    "/images/photos/Imagenes_Religiosas/2.webp",
    "/images/photos/Imagenes_Religiosas/3.webp",
    "/images/photos/Imagenes_Religiosas/4.webp",
    "/images/photos/Imagenes_Religiosas/5.webp",
    "/images/photos/Imagenes_Religiosas/6.webp",
    "/images/photos/Imagenes_Religiosas/7.webp",
    "/images/photos/Imagenes_Religiosas/8.webp",
    "/images/photos/Imagenes_Religiosas/9.webp",
    "/images/photos/Imagenes_Religiosas/10.webp",
    "/images/photos/Imagenes_Religiosas/11.webp",
    "/images/photos/Imagenes_Religiosas/12.webp",
    "/images/photos/Imagenes_Religiosas/13.webp",
    "/images/photos/Imagenes_Religiosas/14.webp",
    "/images/photos/Imagenes_Religiosas/15.webp",
    "/images/photos/Imagenes_Religiosas/16.webp",
    "/images/photos/Imagenes_Religiosas/17.webp",
    "/images/photos/Imagenes_Religiosas/18.webp",
  ];
  const Espejos = [
     "/images/photos/Espejos/1.webp",
     "/images/photos/Espejos/2.webp",
     "/images/photos/Espejos/5.webp",
  ];

  const Colgantes = [
    "/images/photos/Colgantes/1.webp",
    "/images/photos/Colgantes/2.webp",
    "/images/photos/Colgantes/4.webp",
    "/images/photos/Colgantes/6.webp",
  ];

  const Grandes = [
    "/images/photos/Grandes/1.webp",
    "/images/photos/Grandes/2.webp",
    "/images/photos/Grandes/7.webp",
    "/images/photos/Grandes/8.webp",
  ];

  const Medianos = [
    "/images/photos/Medianos/1.webp",
    "/images/photos/Medianos/3.webp",
    "/images/photos/Medianos/8.webp",
    "/images/photos/Medianos/9.webp",
    "/images/photos/Medianos/10.webp",
  ];

  const Pequeños = [
    "/images/photos/Pequeños/1.webp",
    "/images/photos/Pequeños/3.webp",
    "/images/photos/Pequeños/4.webp",
    "/images/photos/Pequeños/11.webp",
    "/images/photos/Pequeños/12.webp",
    "/images/photos/Pequeños/13.webp",
    "/images/photos/Pequeños/14.webp",
  ];

  // Combinamos todos los productos en un solo arreglo
  const sliderImages = [
    ...Imagenes_Religiosas,
    ...Espejos,
    ...Colgantes,
    ...Grandes,
    ...Medianos,
    ...Pequeños,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <div className="home-container">
      <section className="hero">
        <img
          src="/images/catedral.jpg"
          className="hero-image"
          alt="Fondo Catedral"
        />
        <div className="hero-overlay">
          <div className="hero-left">
            <div className="product-slider">
              <img
                src={sliderImages[currentSlide]}
                alt="Producto Religioso"
                className="slider-image"
              />
            </div>
            <div className="slider-description">
              <p>
                Descubre productos que elevan tu espíritu y embellecen tu
                entorno.
              </p>
            </div>
            <div className="cta-buttons">
              <Link to="/productos-terminados" className="btn-secondary">
                Ver Catálogo
              </Link>
            </div>
          </div>
        <div className="hero-right">
          <div className="site-description">
            <h2>Bienvenido a Nuestro Sitio</h2>
            <img
              src="/images/srdelasalud.jpg"
              alt="logo"
              className="logotipo"
              />
            <div className="cta-buttons">
              <h2 className="slogan">
                !TENEMOS IMÁGENES RELIGIOSAS EN TODAS LAS MEDIDAS DESEADAS!
              </h2>
              <p>
                Aquí encontrarás una amplia gama de artículos religiosos ,
                seleccionados cuidadosamente para inspirar y enriquecer tu fe.
              </p>
              <Link to="/productos-terminados" className="btn-primary">
                Ver Catálogo
              </Link>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}
