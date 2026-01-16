import React, { useState } from "react";
import {
  Trash2,
  CreditCard,
  MessageCircle,
  ShoppingBag,
  X,
} from "lucide-react";

const Cart = ({ items = [], onRemove, onFinalizar }) => {
  const [metodoPago, setMetodoPago] = useState("whatsapp");

  // Cálculo del total
  const total = items.reduce((acc, item) => acc + (item?.precio || 0), 0);

  const procesarCompra = () => {
    if (items.length === 0) return;

    if (metodoPago === "whatsapp") {
      const numeroTelefono = "5491122334455";
      const listaProductos = items
        .map((i) => `- ${i?.nombre} ($${i?.precio})`)
        .join("\n");
      const mensaje = encodeURIComponent(
        `¡Hola Alexis Studio!\nHe realizado un pedido:\n\n${listaProductos}\n\nTotal: $${total.toFixed(
          2
        )}\n\n¿Me confirman los pasos a seguir?`
      );

      window.open(`https://wa.me/${numeroTelefono}?text=${mensaje}`, "_blank");
      onFinalizar();
    } else {
      alert("Redirigiendo a pasarela de pago segura...");
      setTimeout(() => {
        onFinalizar();
      }, 1500);
    }

    const instance = window.bootstrap?.Offcanvas?.getInstance(
      document.getElementById("cartOffcanvas")
    );
    if (instance) instance.hide();
  };

  return (
    <div
      className="offcanvas offcanvas-end bg-white border-0 shadow"
      tabIndex="-1"
      id="cartOffcanvas"
      style={{ width: "400px", borderRadius: "2rem 0 0 2rem" }}
    >
      <div className="offcanvas-header border-bottom py-4 px-4">
        <div className="d-flex align-items-center gap-2">
          <ShoppingBag size={20} className="text-primary" />
          <h5 className="offcanvas-title fw-black mb-0">MI PEDIDO</h5>
        </div>
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
              Explora nuestra colección y encuentra algo increíble para ti.
            </p>
            <button
              className="btn btn-dark mt-3 rounded-pill px-4 py-2 fw-bold"
              data-bs-dismiss="offcanvas"
              style={{ letterSpacing: "1px" }}
            >
              EMPEZAR A COMPRAR
            </button>
          </div>
        ) : (
          <>
            <div className="flex-grow-1 overflow-auto mb-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center mb-3 pb-3 border-bottom border-light animate-fade-up"
                >
                  <img
                    src={item?.imagen}
                    alt={item?.nombre}
                    className="rounded-3 shadow-sm"
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="ms-3 flex-grow-1">
                    <h6 className="mb-0 small fw-bold text-dark">
                      {item?.nombre}
                    </h6>
                    <p className="text-primary mb-0 fw-bold small">
                      ${item?.precio}
                    </p>
                  </div>
                  <button
                    onClick={() => onRemove(index)}
                    className="btn btn-link text-danger p-0 opacity-50 hover-opacity-100 transition-all"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-light p-3 rounded-4 mb-2">
              <p
                className="fw-bold mb-3"
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "1px",
                  opacity: 0.6,
                }}
              >
                MÉTODO DE PAGO
              </p>

              <div
                className={`d-flex align-items-center p-3 mb-2 rounded-3 border transition-all ${
                  metodoPago === "whatsapp"
                    ? "border-dark bg-white shadow-sm"
                    : "border-transparent text-muted"
                }`}
                onClick={() => setMetodoPago("whatsapp")}
                style={{ cursor: "pointer" }}
              >
                <MessageCircle size={20} className="me-3 text-success" />
                <div className="flex-grow-1">
                  <p className="mb-0 fw-bold small">WhatsApp</p>
                  <p
                    className="mb-0 smaller opacity-75"
                    style={{ fontSize: "0.65rem" }}
                  >
                    Coordina entrega y pago
                  </p>
                </div>
              </div>

              <div
                className={`d-flex align-items-center p-3 rounded-3 border transition-all ${
                  metodoPago === "digital"
                    ? "border-dark bg-white shadow-sm"
                    : "border-transparent text-muted"
                }`}
                onClick={() => setMetodoPago("digital")}
                style={{ cursor: "pointer" }}
              >
                <CreditCard size={20} className="me-3 text-primary" />
                <div className="flex-grow-1">
                  <p className="mb-0 fw-bold small">Pago Online</p>
                  <p
                    className="mb-0 smaller opacity-75"
                    style={{ fontSize: "0.65rem" }}
                  >
                    Tarjeta o transferencia
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {items.length > 0 && (
        <div className="offcanvas-footer p-4 border-top bg-white">
          <div className="d-flex justify-content-between mb-3 px-1">
            <span className="text-muted fw-bold small">TOTAL A PAGAR</span>
            <span className="text-dark fw-black fs-4">${total.toFixed(2)}</span>
          </div>
          <button
            onClick={procesarCompra}
            className={`btn w-100 py-3 rounded-pill fw-bold shadow transition-all d-flex align-items-center justify-content-center gap-2 ${
              metodoPago === "whatsapp" ? "btn-success" : "btn-dark"
            }`}
          >
            {metodoPago === "whatsapp" ? (
              <MessageCircle size={18} />
            ) : (
              <CreditCard size={18} />
            )}
            {metodoPago === "whatsapp"
              ? "CONFIRMAR POR WHATSAPP"
              : "PAGAR AHORA"}
          </button>
          <p
            className="text-center mt-3 text-muted"
            style={{ fontSize: "0.65rem" }}
          >
            🔒 Compra protegida por Alexis Studio
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
