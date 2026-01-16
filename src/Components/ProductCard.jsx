import React from "react";
import { Plus } from "lucide-react";

const ProductCard = ({ producto, onAgregar }) => {
  return (
    <div className="col">
      <div className="card h-100 border-0 bg-transparent shadow-none">
        <div className="position-relative overflow-hidden rounded-4 bg-light">
          <img
            src={producto.imagen}
            className="card-img-top"
            style={{ height: "220px", objectFit: "cover" }}
            alt={producto.nombre}
          />

          <button
            onClick={() => onAgregar(producto)}
            className="btn btn-white bg-white position-absolute bottom-0 end-0 m-2 shadow-sm rounded-circle p-2 border hover-scale"
          >
            <Plus size={18} className="text-dark" />
          </button>
        </div>

        <div className="card-body px-0 pt-2 text-center">
          <h6 className="fw-bold text-dark mb-1" style={{ fontSize: "0.9rem" }}>
            {producto.nombre}
          </h6>
          <p className="fw-bold text-primary mb-0">${producto.precio}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
