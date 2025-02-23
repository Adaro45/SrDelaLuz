import React, { useState } from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "../components/ScrollAnimation";
import "../styles/FinishedProducts.css";

const Espejos = [
  { id: 1, src: "/images/photos/Espejos/1.webp", type: "Espejos" },
  { id: 2, src: "/images/photos/Espejos/2.webp", type: "Espejos" },
  { id: 3, src: "/images/photos/Espejos/3.webp", type: "Espejos" },
  { id: 4, src: "/images/photos/Espejos/4.webp", type: "Espejos" },
  { id: 5, src: "/images/photos/Espejos/5.webp", type: "Espejos" },
];

const Colgantes = [
  { id: 1, src: "/images/photos/Colgantes/1.webp", type: "Colgantes" },
  { id: 2, src: "/images/photos/Colgantes/2.webp", type: "Colgantes" },
  { id: 3, src: "/images/photos/Colgantes/3.webp", type: "Colgantes" },
  { id: 4, src: "/images/photos/Colgantes/4.webp", type: "Colgantes" },
  { id: 5, src: "/images/photos/Colgantes/5.webp", type: "Colgantes" },
  { id: 6, src: "/images/photos/Colgantes/6.webp", type: "Colgantes" },
];

const Grandes = [
  { id: 1, src: "/images/photos/Grandes/1.webp", type: "Grandes" },
  { id: 2, src: "/images/photos/Grandes/2.webp", type: "Grandes" },
  { id: 3, src: "/images/photos/Grandes/3.webp", type: "Grandes" },
  { id: 4, src: "/images/photos/Grandes/4.webp", type: "Grandes" },
  { id: 5, src: "/images/photos/Grandes/5.webp", type: "Grandes" },
  { id: 6, src: "/images/photos/Grandes/6.webp", type: "Grandes" },
  { id: 7, src: "/images/photos/Grandes/7.webp", type: "Grandes" },
  { id: 8, src: "/images/photos/Grandes/8.webp", type: "Grandes" },
];

const Medianos = [
  { id: 1, src: "/images/photos/Medianos/1.webp", type: "Medianos" },
  { id: 2, src: "/images/photos/Medianos/2.webp", type: "Medianos" },
  { id: 3, src: "/images/photos/Medianos/3.webp", type: "Medianos" },
  { id: 4, src: "/images/photos/Medianos/4.webp", type: "Medianos" },
  { id: 5, src: "/images/photos/Medianos/5.webp", type: "Medianos" },
  { id: 6, src: "/images/photos/Medianos/6.webp", type: "Medianos" },
  { id: 7, src: "/images/photos/Medianos/7.webp", type: "Medianos" },
  { id: 8, src: "/images/photos/Medianos/8.webp", type: "Medianos" },
  { id: 9, src: "/images/photos/Medianos/9.webp", type: "Medianos" },
  { id: 10, src: "/images/photos/Medianos/10.webp", type: "Medianos" },
];

const Pequeños = [
  { id: 1, src: "/images/photos/Pequeños/1.webp", type: "Pequeños" },
  { id: 2, src: "/images/photos/Pequeños/2.webp", type: "Pequeños" },
  { id: 3, src: "/images/photos/Pequeños/3.webp", type: "Pequeños" },
  { id: 4, src: "/images/photos/Pequeños/4.webp", type: "Pequeños" },
  { id: 5, src: "/images/photos/Pequeños/5.webp", type: "Pequeños" },
  { id: 6, src: "/images/photos/Pequeños/6.webp", type: "Pequeños" },
  { id: 7, src: "/images/photos/Pequeños/7.webp", type: "Pequeños" },
  { id: 8, src: "/images/photos/Pequeños/8.webp", type: "Pequeños" },
  { id: 9, src: "/images/photos/Pequeños/9.webp", type: "Pequeños" },
  { id: 10, src: "/images/photos/Pequeños/10.webp", type: "Pequeños" },
  { id: 11, src: "/images/photos/Pequeños/11.webp", type: "Pequeños" },
  { id: 12, src: "/images/photos/Pequeños/12.webp", type: "Pequeños" },
  { id: 13, src: "/images/photos/Pequeños/13.webp", type: "Pequeños" },
  { id: 14, src: "/images/photos/Pequeños/14.webp", type: "Pequeños" },
];

// Combinamos todos los productos en un solo arreglo
const finishedProducts = [
  ...Espejos,
  ...Colgantes,
  ...Grandes,
  ...Medianos,
  ...Pequeños,
];

export default function FinishedProducts() {
  // Estado para el filtro y para mostrar/ocultar las opciones del select personalizado
  const [selectedType, setSelectedType] = useState("Todos");
  const [showOptions, setShowOptions] = useState(false);

  // Opciones de filtro: se puede modificar fácilmente el listado
  const options = ["Todos", "Espejos", "Colgantes", "Grandes", "Medianos", "Pequeños"];

  // Filtramos los productos según el tipo seleccionado
  const filteredProducts =
    selectedType === "Todos"
      ? finishedProducts
      : finishedProducts.filter((product) => product.type === selectedType);

  return (
    <div className="finished-products-page">
      <h1 className="page-title">Nuestros Productos</h1>
      <div className="custom-select-container">
        <div
          className="custom-select"
          onClick={() => setShowOptions(!showOptions)}
        >
          {selectedType}
        </div>
        {showOptions && (
          <div className="custom-options">
            {options.map((option) => (
              <div
                key={option}
                className="custom-option"
                onClick={() => {
                  setSelectedType(option);
                  setShowOptions(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Mapeo de productos filtrados */}
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ScrollAnimation key={`${product.type}-${product.id}`}>
            <article className="product-card">
              <div className="card-image-container">
                <img src={product.src} alt={product.type} loading="lazy" />
              </div>
              <div className="card-content">
                <h3>{product.type}</h3>
                <Link to="/contacto" className="card-button">
                  Consultar información
                </Link>
              </div>
            </article>
          </ScrollAnimation>
        ))}
      </div>

      <div className="development-banner">
        <p>¡Sitio en desarrollo!</p>
        <p>Estamos ampliando nuestro catálogo. Para más información:</p>
        <Link to="/contacto" className="banner-button">
          Contactar a un asesor
        </Link>
      </div>
    </div>
  );
}
