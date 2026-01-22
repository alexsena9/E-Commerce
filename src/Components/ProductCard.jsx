import React, { useState } from "react";
import { Plus, Star, Truck } from "lucide-react";

const ProductCard = ({ producto, onAgregar, onVerDetalle }) => {
  const [loaded, setLoaded] = useState(false);
  const rating = Math.floor(Math.random() * (5 - 4 + 1) + 4);

  return (
    <div className="card h-100 border-0 bg-transparent shadow-none">
      <div
        className="position-relative rounded-4 bg-light overflow-hidden"
        style={{ cursor: "pointer", minHeight: "220px" }}
        onClick={() => onVerDetalle(producto)}
      >
        {!loaded && (
          <div className="placeholder-glow w-100 h-100 position-absolute">
            <div className="placeholder w-100 h-100 bg-secondary opacity-10"></div>
          </div>
        )}

        {producto.precio >= 500 && (
          <div className="position-absolute top-0 start-0 m-2 z-2">
            <span
              className="badge bg-dark text-white rounded-pill px-2 py-1 d-flex align-items-center gap-1 shadow-sm"
              style={{ fontSize: "0.55rem", letterSpacing: "0.5px" }}
            >
              <Truck size={10} /> ENVÍO GRATIS
            </span>
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
          className="btn btn-white bg-white position-absolute bottom-0 end-0 m-2 shadow-sm rounded-circle p-2 border"
        >
          <Plus size={18} className="text-dark" />
        </button>
      </div>
      <div className="card-body px-0 pt-3 text-center">
        <div className="d-flex justify-content-center gap-1 mb-1 text-warning">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={10}
              fill={i < rating ? "currentColor" : "transparent"}
              strokeWidth={i < rating ? 0 : 2}
            />
          ))}
        </div>
        <p
          className="text-muted mb-1 small text-uppercase tracking-widest"
          style={{ fontSize: "0.6rem" }}
        >
          {producto.categoria}
        </p>
        <h6 className="fw-bold text-dark mb-1 small">{producto.nombre}</h6>
        <p className="fw-black text-primary mb-0 small">${producto.precio}</p>
      </div>
    </div>
  );
};

export default ProductCard;
