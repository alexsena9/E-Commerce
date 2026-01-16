import React from "react";

const ProductCard = ({ producto }) => {
  return (
    <div className="col">
      <div className="card h-100 border-0 shadow-lg bg-dark text-white rounded-5 overflow-hidden group">
        <div className="position-relative">
          <img
            src={producto.imagen}
            className="card-img-top p-3 rounded-5"
            style={{ height: "280px", objectFit: "cover" }}
            alt={producto.nombre}
          />
          <span className="position-absolute top-0 start-0 m-4 badge rounded-pill bg-info text-dark fw-bold">
            {producto.categoria}
          </span>
        </div>
        <div className="card-body p-4">
          <h5 className="card-title fw-bold mb-3">{producto.nombre}</h5>
          <div className="d-flex justify-content-between align-items-center mt-4">
            <span className="text-info fs-3 fw-black">${producto.precio}</span>
            <button className="btn btn-light rounded-pill px-4 fw-bold hover-info">
              Añadir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
