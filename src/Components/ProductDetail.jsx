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
        transition: "all 0.3s ease",
      }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-5 overflow-hidden shadow-lg w-100"
        style={{
          maxWidth: "750px",
          animation: "fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="row g-0">
          <div className="col-md-5">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-100 h-100 object-fit-cover"
              style={{ minHeight: "350px" }}
            />
          </div>

          <div className="col-md-7 p-4 p-lg-4 position-relative d-flex flex-column justify-content-center">
            <button
              onClick={onClose}
              className="btn btn-light rounded-circle position-absolute top-0 end-0 m-3 shadow-sm border-0"
              style={{
                width: "35px",
                height: "35px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <X size={18} />
            </button>

            <div className="pe-4">
              <span
                className="text-muted small text-uppercase tracking-widest"
                style={{ fontSize: "0.65rem" }}
              >
                {producto.categoria}
              </span>
              <h3
                className="fw-bold text-dark mt-1 mb-2"
                style={{ fontSize: "1.5rem" }}
              >
                {producto.nombre}
              </h3>
              <h4 className="text-primary fw-bold mb-3">${producto.precio}</h4>

              <p className="text-muted mb-4 small lh-base">
                Experimenta la excelencia con el modelo{" "}
                <strong>{producto.nombre}</strong>. Diseñado para ofrecer
                rendimiento y un estilo minimalista único en su clase.
              </p>

              <div className="d-flex flex-column gap-2 mb-4">
                <div
                  className="d-flex align-items-center gap-2 text-success"
                  style={{ fontSize: "0.75rem" }}
                >
                  <Truck size={14} /> <span>Envío priority gratis</span>
                </div>
                <div
                  className="d-flex align-items-center gap-2 text-muted"
                  style={{ fontSize: "0.75rem" }}
                >
                  <ShieldCheck size={14} /> <span>Garantía Alexis Studio</span>
                </div>
              </div>

              <button
                onClick={() => {
                  onAgregar(producto);
                  onClose();
                }}
                className="btn btn-dark w-100 py-2.5 rounded-pill fw-bold d-flex align-items-center justify-content-center gap-2 shadow-sm border-0"
                style={{ fontSize: "0.9rem" }}
              >
                <ShoppingCart size={18} />
                AÑADIR AL CARRITO
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
