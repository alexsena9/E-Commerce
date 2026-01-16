import React from "react";
import { X, ShoppingBag, Send } from "lucide-react";

const Cart = ({ items, onRemove, onFinalizar }) => {
  const total = items.reduce((acc, item) => acc + item.precio, 0);

  return (
    <div
      className="offcanvas offcanvas-end border-0 shadow-lg"
      tabIndex="-1"
      id="cartOffcanvas"
      style={{ borderRadius: "2rem 0 0 2rem" }}
    >
      <div className="offcanvas-header border-bottom p-4">
        <h5 className="fw-bold m-0">TU CARRITO</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
        ></button>
      </div>

      <div className="offcanvas-body p-4 d-flex flex-column">
        {items.length === 0 ? (
          <div className="h-100 d-flex flex-column align-items-center justify-content-center text-center animate-fade-up">
            <div className="mb-4 opacity-10">
              <ShoppingBag size={100} strokeWidth={1} />
            </div>
            <h5 className="fw-bold">Tu carrito está vacío</h5>
            <p className="text-muted small px-3">
              Encuentra los mejores productos tecnológicos en nuestra tienda.
            </p>
            <button
              className="btn btn-dark mt-3 rounded-pill px-4"
              data-bs-dismiss="offcanvas"
            >
              EMPEZAR A COMPRAR
            </button>
          </div>
        ) : (
          <>
            <div className="flex-grow-1 overflow-auto">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center mb-4 p-2 bg-light rounded-4 animate-fade-up"
                >
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="rounded-3 shadow-sm"
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="ms-3 flex-grow-1">
                    <h6 className="mb-0 small fw-bold">{item.nombre}</h6>
                    <p className="mb-0 smaller text-muted">${item.precio}</p>
                  </div>
                  <button
                    onClick={() => onRemove(index)}
                    className="btn btn-sm btn-white rounded-circle shadow-sm border-0"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-auto border-top pt-4">
              <div className="d-flex justify-content-between mb-4">
                <span className="fw-bold text-muted">TOTAL</span>
                <span className="fw-bold h4 mb-0">${total}</span>
              </div>
              <button
                className="btn btn-dark w-100 d-flex align-items-center justify-content-center gap-2 py-3 rounded-4 shadow"
                onClick={onFinalizar}
              >
                <Send size={18} /> FINALIZAR COMPRA
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
