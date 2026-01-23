import React from "react";
import { ShoppingCart, Eye, Star, Zap, Tag, Flame } from "lucide-react";

const ProductCard = ({ producto, onAgregar, onVerDetalle }) => {
  const getBadge = (id) => {
    if (id % 15 === 0)
      return { text: "NUEVO", icon: <Zap size={10} />, class: "bg-primary" };
    if (id % 8 === 0)
      return { text: "SALE", icon: <Tag size={10} />, class: "bg-danger" };
    if (id % 12 === 0)
      return {
        text: "TOP",
        icon: <Flame size={10} />,
        class: "bg-warning text-dark",
      };
    return null;
  };

  const badge = getBadge(producto.id);

  return (
    <div className="card h-100 border-0 shadow-sm hover-card overflow-hidden bg-white rounded-4">
      <div className="position-relative overflow-hidden">
        {badge && (
          <div
            className={`position-absolute top-0 start-0 m-3 z-3 d-flex align-items-center gap-1 px-2 py-1 rounded-pill text-white fw-black ${badge.class}`}
            style={{ fontSize: "0.65rem" }}
          >
            {badge.icon} {badge.text}
          </div>
        )}

        <div
          className="img-zoom-container"
          style={{ aspectRatio: "1/1", backgroundColor: "#f8f9fa" }}
        >
          <img
            src={producto.imagen}
            className="w-100 h-100 object-fit-cover"
            alt={producto.nombre}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=500";
            }}
            loading="lazy"
          />
        </div>

        <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-white/90 backdrop-blur-sm translate-y-full hover-target transition-all duration-300">
          <button
            className="btn btn-dark btn-sm w-100 rounded-pill fw-bold d-flex align-items-center justify-content-center gap-2"
            onClick={() => onVerDetalle(producto)}
          >
            <Eye size={14} /> VISTA RÁPIDA
          </button>
        </div>
      </div>

      <div className="card-body p-3 d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center mb-1">
          <span
            className="text-uppercase text-muted fw-bold"
            style={{ fontSize: "0.6rem" }}
          >
            {producto.categoria}
          </span>
          <div className="d-flex align-items-center gap-1 text-warning">
            <Star size={10} fill="currentColor" />
            <span className="text-dark fw-bold" style={{ fontSize: "0.7rem" }}>
              4.8
            </span>
          </div>
        </div>

        <h6
          className="card-title fw-bold text-dark mb-2 text-truncate-2"
          style={{ fontSize: "0.85rem", height: "2.4rem" }}
        >
          {producto.nombre}
        </h6>

        <div className="mt-auto d-flex align-items-center justify-content-between pt-2 border-top">
          <div>
            <span
              className="text-muted smaller d-block text-decoration-line-through"
              style={{ fontSize: "0.65rem" }}
            >
              ${(producto.precio * 1.2).toFixed(0)}
            </span>
            <span className="fw-black text-dark h6 mb-0">
              ${producto.precio.toLocaleString()}
            </span>
          </div>
          <button
            className="btn btn-dark rounded-circle d-flex align-items-center justify-content-center p-0 shadow-sm"
            style={{ width: "35px", height: "35px" }}
            onClick={() => onAgregar(producto)}
          >
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
