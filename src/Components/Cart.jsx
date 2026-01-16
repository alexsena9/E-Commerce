import React, { useState } from "react";
import { Trash2, CreditCard, MessageCircle } from "lucide-react";

const Cart = ({ items = [], onRemove }) => {
  const [metodoPago, setMetodoPago] = useState("whatsapp");

  const total = items.reduce((acc, item) => acc + (item?.precio || 0), 0);

  const procesarCompra = () => {
    if (items.length === 0) return;

    if (metodoPago === "whatsapp") {
      const numeroTelefono = "5491122334455";
      const listaProductos = items
        .map((i) => `- ${i?.nombre || "Producto"} ($${i?.precio || 0})`)
        .join("\n");
      const mensaje = encodeURIComponent(
        `¡Hola Alexis Studio!\nQuiero hacer un pedido:\n${listaProductos}\n\nTotal: $${total.toFixed(
          2
        )}`
      );
      window.open(`https://wa.me/${numeroTelefono}?text=${mensaje}`, "_blank");
    } else {
      alert("Redirigiendo a pasarela de pago segura...");
    }
  };

  return (
    <div
      className="offcanvas offcanvas-end bg-white"
      tabIndex="-1"
      id="cartOffcanvas"
      style={{ width: "400px" }}
    >
      <div className="offcanvas-header border-bottom py-4">
        <h5 className="offcanvas-title fw-bold">MI CARRITO ({items.length})</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
        ></button>
      </div>

      <div className="offcanvas-body">
        {items.length === 0 ? (
          <div className="text-center mt-5 text-muted">
            El carrito está vacío
          </div>
        ) : (
          <>
            <div className="mb-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center mb-3 pb-3 border-bottom"
                >
                  <img
                    src={item?.imagen || "https://via.placeholder.com/50"}
                    alt={item?.nombre}
                    className="rounded"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="ms-3 flex-grow-1">
                    <h6 className="mb-0 small fw-bold">
                      {item?.nombre || "Producto"}
                    </h6>
                    <p className="text-primary mb-0 small">
                      ${item?.precio || 0}
                    </p>
                  </div>
                  <button
                    onClick={() => onRemove(index)}
                    className="btn btn-sm text-danger opacity-50"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-light p-3 rounded-4 mb-4">
              <p className="small fw-bold mb-3">MÉTODO DE PAGO:</p>
              <div
                className={`d-flex align-items-center p-2 mb-2 rounded-3 border cursor-pointer ${
                  metodoPago === "whatsapp"
                    ? "border-dark bg-white"
                    : "border-transparent"
                }`}
                onClick={() => setMetodoPago("whatsapp")}
                style={{ cursor: "pointer" }}
              >
                <MessageCircle size={18} className="me-2 text-success" />
                <span className="small fw-medium">WhatsApp</span>
              </div>
              <div
                className={`d-flex align-items-center p-2 rounded-3 border cursor-pointer ${
                  metodoPago === "digital"
                    ? "border-dark bg-white"
                    : "border-transparent"
                }`}
                onClick={() => setMetodoPago("digital")}
                style={{ cursor: "pointer" }}
              >
                <CreditCard size={18} className="me-2 text-primary" />
                <span className="small fw-medium">Pago Digital</span>
              </div>
            </div>
          </>
        )}
      </div>

      {items.length > 0 && (
        <div className="offcanvas-footer p-4 border-top">
          <div className="d-flex justify-content-between mb-3 fw-bold">
            <span>TOTAL:</span>
            <span className="fs-4">${total.toFixed(2)}</span>
          </div>
          <button
            onClick={procesarCompra}
            className={`btn w-100 py-3 rounded-pill fw-bold ${
              metodoPago === "whatsapp" ? "btn-success" : "btn-dark"
            }`}
          >
            {metodoPago === "whatsapp" ? "PEDIR POR WHATSAPP" : "PAGAR AHORA"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
