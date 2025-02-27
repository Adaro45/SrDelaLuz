import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "../components/ScrollAnimation";
import "../styles/FinishedProducts.css";

const Imágenes_Religiosas = [
  { id: 1, src: "/images/photos/Imagenes_Religiosas/1.webp", type: "Imágenes Religiosas",description: ["Cristo de resina con cruz de resina y cendal de tela","Precio:$450","65 cm de largo"] },
  { id: 2, src: "/images/photos/Imagenes_Religiosas/2.webp", type: "Imágenes Religiosas",description: ["San Judas de resina"," Precio:$120","30 cm de largo"] },
  { id: 3, src: "/images/photos/Imagenes_Religiosas/3.webp", type: "Imágenes Religiosas",description: ["Cristo negro de resina con cruz rústica","Precio:$280","70cm de largo"] },
  { id: 4, src: "/images/photos/Imagenes_Religiosas/4.webp", type: "Imágenes Religiosas",description: ["Cuadro de la última cena de totalmente de resina","Precio:$300","38x25 cm"]},
  { id: 5, src: "/images/photos/Imagenes_Religiosas/5.webp", type: "Imágenes Religiosas",description: ["Virgen de Guadalupe de resina","Precio:$400","60 cm de largo"]},
  { id: 6, src: "/images/photos/Imagenes_Religiosas/6.webp", type: "Imágenes Religiosas",description: ["Cristo de la santísima Trinidad","Precio: $280","50cm de largo"]},
  { id: 7, src: "/images/photos/Imagenes_Religiosas/7.webp", type: "Imágenes Religiosas",description: ["Niño Dios de resina","Precio:$600","60cm de largo"]},
  { id: 8, src: "/images/photos/Imagenes_Religiosas/8.webp", type: "Imágenes Religiosas",description: ["Virgen de Guadalupe totalmente de resina","Precio:$200","30cm de largo"]},
  { id: 9, src: "/images/photos/Imagenes_Religiosas/9.webp", type: "Imágenes Religiosas",description: ["Cristo de resina con cruz barnizada","Precio:$220", "50 cm de largo"]},
  { id: 10, src: "/images/photos/Imagenes_Religiosas/10.webp", type: "Imágenes Religiosas",description: ["Cristo de tripié de","Precio:$280","45 cm de largo"]},
  { id: 11, src: "/images/photos/Imagenes_Religiosas/11.webp", type: "Imágenes Religiosas",description: ["Cristo de resina con cruz de resina","Precio:$450","65 cm de largo"]},
  { id: 12, src: "/images/photos/Imagenes_Religiosas/12.webp", type: "Imágenes Religiosas",description: ["San Judas de resina","Precio:$600","75cm de largo"]},
  { id: 13, src: "/images/photos/Imagenes_Religiosas/13.webp", type: "Imágenes Religiosas",description: ["Cristo de resina","Precio:$8000","3 metros"]},
  { id: 14, src: "/images/photos/Imagenes_Religiosas/14.webp", type: "Imágenes Religiosas",description: ["Sagrada familia de resina","Precio:$1400","80cm de largo"]},
  { id: 15, src: "/images/photos/Imagenes_Religiosas/15.webp", type: "Imágenes Religiosas",description: ["San Gabriel de resina","Precio:$3000","1 metro 20cm"]},
  { id: 16, src: "/images/photos/Imagenes_Religiosas/16.webp", type: "Imágenes Religiosas",description: ["San Migue de resina","Precio:$3000","1 metro 20cm"]},
  { id: 17, src: "/images/photos/Imagenes_Religiosas/17.webp", type: "Imágenes Religiosas",description: ["San Rafael de resina","Precio:$3000","1 metro 20cm"]},
  { id: 18, src: "/images/photos/Imagenes_Religiosas/18.webp", type: "Imágenes Religiosas",description: ["Sagrado corazón de resina","Precio:$1400","1 metro 5cm"]},
];
// Espejos: dorados y modernos
const Espejos = [
  { id: 1, src: "/images/photos/Espejos/1.webp", type: "Espejos", description: ["Espejo dorado y moderno, diseño minimalista."] },
  { id: 2, src: "/images/photos/Espejos/2.webp", type: "Espejos", description: ["Espejo dorado con marco contemporáneo."] },
  { id: 3, src: "/images/photos/Espejos/3.webp", type: "Espejos", description: ["Espejo dorado, ideal para ambientes modernos."] },
  { id: 4, src: "/images/photos/Espejos/4.webp", type: "Espejos", description: ["Diseño moderno en espejo dorado, elegante y sutil."] },
  { id: 5, src: "/images/photos/Espejos/5.webp", type: "Espejos", description: ["Espejo dorado, acabado brillante y moderno."] },
];

// Colgantes: rosarios y colgantes dorados
const Colgantes = [
  { id: 1, src: "/images/photos/Colgantes/1.webp", type: "Colgantes", description: ["Rosarios y Colgantes dorados, elegantes y sofisticados." ]},
  { id: 2, src: "/images/photos/Colgantes/2.webp", type: "Colgantes", description: ["Colgante dorado, perfecto para cualquier momento." ]},
  { id: 3, src: "/images/photos/Colgantes/3.webp", type: "Colgantes", description: ["Colgante en un diseño sencillo y dorado." ]},
  { id: 4, src: "/images/photos/Colgantes/4.webp", type: "Colgantes", description: ["Colgante dorado con detalles exquisitos." ]},
  { id: 5, src: "/images/photos/Colgantes/5.webp", type: "Colgantes", description: ["Rosario tradicional en acabado dorado." ]},
  { id: 6, src: "/images/photos/Colgantes/6.webp", type: "Colgantes", description: ["Colgante dorado, combina tradición y modernidad." ]},
];

// Grandes: molduras con gran detalle y acabado elegante
const Grandes = [
  { id: 1, src: "/images/photos/Grandes/1.webp", type: "Grandes", description: ["Cuadro grande con detalles exquisitos y acabado elegante."] },
  { id: 2, src: "/images/photos/Grandes/2.webp", type: "Grandes", description: ["Marco grande, ornamentado con molduras de lujo."] },
  { id: 3, src: "/images/photos/Grandes/3.webp", type: "Grandes", description: ["Diseño elegante en moldura grande, perfecto para obras de arte."] },
  { id: 4, src: "/images/photos/Grandes/4.webp", type: "Grandes", description: ["Marco de gran tamaño con acabado refinado y detalles elaborados."] },
  { id: 5, src: "/images/photos/Grandes/5.webp", type: "Grandes", description: ["Cuadro grande, estilo clásico con toques modernos."] },
  { id: 6, src: "/images/photos/Grandes/6.webp", type: "Grandes", description: ["Detalle elegante en marco grande, ideal para piezas destacadas."] },
  { id: 7, src: "/images/photos/Grandes/7.webp", type: "Grandes", description: ["Acabado elegante en moldura grande, resalta la belleza de la obra."] },
  { id: 8, src: "/images/photos/Grandes/8.webp", type: "Grandes", description: ["Cuadro grande con gran detalle y un toque de modernidad."] },
];

// Medianos: molduras elegantes con detalle similar
const Medianos = [
  { id: 1, src: "/images/photos/Medianos/1.webp", type: "Medianos", description: ["Cuadro mediana con detalles elegantes y acabado refinado."] },
  { id: 2, src: "/images/photos/Medianos/2.webp", type: "Medianos", description: ["Marco mediano, diseño sofisticado para realzar cualquier obra."] },
  { id: 3, src: "/images/photos/Medianos/3.webp", type: "Medianos", description: ["Cuadro mediana, combinando tradición y modernidad."] },
  { id: 4, src: "/images/photos/Medianos/4.webp", type: "Medianos", description: ["Detalle sutil en moldura mediana, con acabado elegante."] },
  { id: 5, src: "/images/photos/Medianos/5.webp", type: "Medianos", description: ["Marco mediano con un diseño pulido y sofisticado."] },
  { id: 6, src: "/images/photos/Medianos/6.webp", type: "Medianos", description: ["Cuadro mediana, estilo contemporáneo y elegante."] },
  { id: 7, src: "/images/photos/Medianos/7.webp", type: "Medianos", description: ["Detalle ornamental en marco mediano, acabado de alta calidad."] },
  { id: 8, src: "/images/photos/Medianos/8.webp", type: "Medianos", description: ["Diseño elegante en moldura mediana, con gran precisión."] },
  { id: 9, src: "/images/photos/Medianos/9.webp", type: "Medianos", description: ["Marco mediano, perfecto para realzar la belleza de la obra."] },
  { id: 10, src: "/images/photos/Medianos/10.webp", type: "Medianos", description: ["Cuadro mediana con un acabado impecable y detalles sutiles."] },
];

// Pequeños: molduras pequeñas, igualmente elegantes y detalladas
const Pequeños = [
  { id: 1, src: "/images/photos/Pequeños/1.webp", type: "Pequeños", description:[ "Cuadro pequeña, con diseño elegante y moderno."] },
  { id: 2, src: "/images/photos/Pequeños/2.webp", type: "Pequeños", description:[ "Marco pequeño, detalles exquisitos en acabado dorado."] },
  { id: 3, src: "/images/photos/Pequeños/3.webp", type: "Pequeños", description:[ "Cuadro pequeña, perfecta para obras de arte íntimas."] },
  { id: 4, src: "/images/photos/Pequeños/4.webp", type: "Pequeños", description:[ "Diseño moderno en moldura pequeña, con acabados de alta calidad."] },
  { id: 5, src: "/images/photos/Pequeños/5.webp", type: "Pequeños", description:[ "Marco pequeño, estilo elegante y sofisticado."] },
  { id: 6, src: "/images/photos/Pequeños/6.webp", type: "Pequeños", description:[ "Cuadro pequeña con acabado dorado, realza la decoración."] },
  { id: 7, src: "/images/photos/Pequeños/7.webp", type: "Pequeños", description:[ "Detalle elegante en moldura pequeña, con un toque moderno."] },
  { id: 8, src: "/images/photos/Pequeños/8.webp", type: "Pequeños", description:[ "Marco pequeño, acabado refinado y detalle ornamental."] },
  { id: 9, src: "/images/photos/Pequeños/9.webp", type: "Pequeños", description:[ "Cuadro pequeña, diseño minimalista y elegante."] },
  { id: 10, src: "/images/photos/Pequeños/10.webp", type: "Pequeños", description: ["Detalle sutil en marco pequeño, con acabado dorado."] },
  { id: 11, src: "/images/photos/Pequeños/11.webp", type: "Pequeños", description: ["Cuadro pequeña con diseño exclusivo y elegante."] },
  { id: 12, src: "/images/photos/Pequeños/12.webp", type: "Pequeños", description: ["Marco pequeño, detalles modernos y sofisticados."] },
  { id: 13, src: "/images/photos/Pequeños/13.webp", type: "Pequeños", description: ["Cuadro pequeña, perfecta para piezas de arte delicadas."] },
  { id: 14, src: "/images/photos/Pequeños/14.webp", type: "Pequeños", description: ["Detalle ornamental en moldura pequeña, con acabado de lujo."] },
];

// Combinamos todos los productos en un solo arreglo
const finishedProducts = [
  ...Imágenes_Religiosas,
  ...Espejos,
  ...Colgantes,
  ...Grandes,
  ...Medianos,
  ...Pequeños,
];

// Mapeo para que en el select se muestren las etiquetas deseadas
const filterMap = {
  "Todos": "Todos",
  "Imágenes Religiosas": "Imágenes Religiosas",
  "Espejos": "Espejos",
  "Colgantes": "Colgantes",
  "Cuadros grandes": "Grandes",
  "Cuadros medianos": "Medianos",
  "Cuadros pequeños": "Pequeños"
};

export default function FinishedProducts() {
  // Estado para el filtro y para mostrar/ocultar las opciones del select personalizado
  const [selectedType, setSelectedType] = useState("Todos");
  const [showOptions, setShowOptions] = useState(false);

  // Opciones de filtro: se muestran con las etiquetas deseadas
  const options = ["Todos","Imágenes Religiosas" ,"Espejos", "Colgantes", "Cuadros grandes", "Cuadros medianos", "Cuadros pequeños"];
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedType]);
  // Filtramos los productos según el tipo seleccionado
  const filteredProducts =
    selectedType === "Todos"
      ? finishedProducts
      : finishedProducts.filter(
          (product) => product.type === filterMap[selectedType]
        );

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
                <div className="product-specs">
                    <h4>Detalles del producto:</h4>
                    <ul>
                      {product.description.map((description, index) => (
                        <li key={index}>{description}</li>
                      ))}
                    </ul>
                  </div>
                <Link to="/contacto" className="card-button">
                  Consultar información
                </Link>
              </div>
            </article>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
}
