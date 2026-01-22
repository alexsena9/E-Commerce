import React, { useState } from "react";
import { Plus, Star } from "lucide-react";

const ProductCard = ({ producto, onAgregar, onVerDetalle }) => {
  const [loaded, setLoaded] = useState(false);
  const ratingAleatorio = Math.floor(Math.random() * (5 - 4 + 1) + 4);

  return (
    <div className="col">
      <div className="card h-100 border-0 bg-transparent shadow-none hover-card">
        <div
          className="position-relative img-zoom-container rounded-4 bg-light overflow-hidden"
          style={{ cursor: "pointer", minHeight: "220px" }}
          onClick={() => onVerDetalle(producto)}
        >
          {!loaded && (
            <div className="placeholder-glow w-100 h-100 position-absolute">
              <div className="placeholder w-100 h-100 bg-secondary opacity-10"></div>
            </div>
          )}

          <img
            src={producto.imagen}
            className={`card-img-top transition-all duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
            style={{ height: "220px", objectFit: "cover" }}
            alt={producto.nombre}
            onLoad={() => setLoaded(true)}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              onAgregar(producto);
            }}
            className="btn btn-white bg-white position-absolute bottom-0 end-0 m-2 shadow-sm rounded-circle p-2 border hover-scale"
          >
            <Plus size={18} className="text-dark" />
          </button>
        </div>

        <div className="card-body px-0 pt-3 text-center">
          <div
            className="d-flex justify-content-center gap-1 mb-1"
            style={{ color: "#FFC107" }}
          >
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={10}
                fill={i < ratingAleatorio ? "#FFC107" : "transparent"}
                strokeWidth={i < ratingAleatorio ? 0 : 2}
              />
            ))}
          </div>
          <p
            className="text-muted mb-1 smaller text-uppercase tracking-widest"
            style={{ fontSize: "0.65rem" }}
          >
            {producto.categoria}
          </p>
          <h6 className="fw-bold text-dark mb-1">{producto.nombre}</h6>
          <p className="fw-black text-primary mb-0">${producto.precio}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
