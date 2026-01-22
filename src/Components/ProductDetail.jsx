import React from "react";
import { X, ShoppingCart, ShieldCheck, Truck } from "lucide-react";

const ProductDetail = ({ producto, onClose, onAgregar }) => {
  if (!producto) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center px-3"
      style={{
        zIndex: 2000,
        backgroundColor: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(8px)",
      }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-5 overflow-hidden shadow-lg w-100"
        style={{ maxWidth: "750px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="row g-0">
          <div className="col-md-5">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-100 h-100 object-fit-cover"
              style={{ minHeight: "400px" }}
            />
          </div>

          <div className="col-md-7 p-4 p-md-5 position-relative">
            <button
              onClick={onClose}
              className="btn border-0 position-absolute top-0 end-0 m-3 text-muted"
            >
              <X size={24} />
            </button>

            <div className="d-flex align-items-center gap-2 mb-2">
              <span
                className="badge bg-light text-muted rounded-pill px-3 py-1 fw-bold"
                style={{ fontSize: "0.65rem" }}
              >
                {producto.categoria.toUpperCase()}
              </span>
            </div>

            <h2 className="fw-black mb-1" style={{ letterSpacing: "-1px" }}>
              {producto.nombre}
            </h2>
            <h3 className="text-primary fw-black mb-4">${producto.precio}</h3>

            <p className="text-muted mb-4 small lh-base">
              Experimenta la excelencia con el modelo{" "}
              <strong>{producto.nombre}</strong>. Tecnología de vanguardia
              diseñada para ofrecer un rendimiento superior y estilo
              minimalista.
            </p>

            <div className="d-flex flex-column gap-3 mb-5">
              <div
                className={`d-flex align-items-center gap-3 ${producto.precio >= 500 ? "text-success" : "text-muted opacity-50"}`}
                style={{ fontSize: "0.8rem" }}
              >
                <Truck size={18} />
                <span className="fw-bold">
                  {producto.precio >= 500
                    ? "Envío Priority Gratis"
                    : "Envío Standard: $15"}
                </span>
              </div>
              <div
                className="d-flex align-items-center gap-3 text-dark"
                style={{ fontSize: "0.8rem" }}
              >
                <ShieldCheck size={18} />
                <span className="fw-bold">Garantía oficial 12 meses</span>
              </div>
            </div>

            <button
              onClick={() => {
                onAgregar(producto);
                onClose();
              }}
              className="btn btn-dark w-100 py-3 rounded-pill fw-bold d-flex align-items-center justify-content-center gap-2 shadow-sm border-0"
            >
              <ShoppingCart size={20} />
              AÑADIR AL CARRITO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
