import React from "react";
import { Trash2, X } from "lucide-react";

const Cart = ({ items, onRemove }) => {
  const total = items.reduce((acc, item) => acc + item.precio, 0);

  return (
    <div
      className="offcanvas offcanvas-end bg-white"
      tabIndex="-1"
      id="cartOffcanvas"
      aria-labelledby="cartLabel"
    >
      <div className="offcanvas-header border-bottom py-4">
        <h5 className="offcanvas-title fw-bold" id="cartLabel">
          TU CARRITO ({items.length})
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>

      <div className="offcanvas-body">
        {items.length === 0 ? (
          <div className="text-center mt-5 text-muted">
            <p>Tu carrito está vacío</p>
          </div>
        ) : (
          items.map((item, index) => (
            <div
              key={index}
              className="d-flex align-items-center mb-3 pb-3 border-bottom"
            >
              <img
                src={item.imagen}
                alt={item.nombre}
                className="rounded"
                style={{ width: "60px", height: "60px", objectFit: "cover" }}
              />
              <div className="ms-3 flex-grow-1">
                <h6 className="mb-0 fw-bold" style={{ fontSize: "0.9rem" }}>
                  {item.nombre}
                </h6>
                <p className="text-primary mb-0 small">${item.precio}</p>
              </div>

              <button
                onClick={() => onRemove(index)}
                className="btn btn-sm text-danger"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))
        )}
      </div>

      {items.length > 0 && (
        <div className="offcanvas-footer p-4 border-top">
          <div className="d-flex justify-content-between mb-3">
            <span className="fw-bold">TOTAL:</span>
            <span className="fw-bold text-primary fs-5">
              ${total.toFixed(2)}
            </span>
          </div>
          <button className="btn btn-dark w-100 py-3 rounded-pill fw-bold">
            FINALIZAR COMPRA
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
