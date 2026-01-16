import React, { useState } from "react";
import { Trash2, CreditCard, MessageCircle } from "lucide-react";

const Cart = ({ items, onRemove }) => {
  const [metodoPago, setMetodoPago] = useState("whatsapp");
  const total = items.reduce((acc, item) => acc + item.precio, 0);

  const procesarCompra = () => {
    if (metodoPago === "whatsapp") {
      const numeroTelefono = "5491122334455"; // Reemplaza con tu número real
      const listaProductos = items
        .map((i) => `- ${i.nombre} ($${i.precio})`)
        .join("\n");
      const mensaje = encodeURIComponent(
        `¡Hola Alexis Studio!\nQuiero hacer un pedido:\n${listaProductos}\n\nTotal: $${total.toFixed(
          2
        )}\n¿Cómo coordino el pago?`
      );
      window.open(`https://wa.me/${numeroTelefono}?text=${mensaje}`, "_blank");
    } else {
      alert("Redirigiendo a la pasarela segura de pagos... (Simulación)");
      console.log("Iniciando checkout digital por: $" + total);
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
        <h5 className="offcanvas-title fw-bold">RESUMEN DE COMPRA</h5>
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
                    src={item.imagen}
                    alt={item.nombre}
                    className="rounded"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="ms-3 flex-grow-1">
                    <h6
                      className="mb-0 small fw-bold text-truncate"
                      style={{ maxWidth: "180px" }}
                    >
                      {item.nombre}
                    </h6>
                    <p className="text-primary mb-0 small">${item.precio}</p>
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
              <p className="small fw-bold mb-3">SELECCIONA MÉTODO DE PAGO:</p>

              <div
                className={`d-flex align-items-center p-2 mb-2 rounded-3 cursor-pointer border ${
                  metodoPago === "whatsapp"
                    ? "border-dark bg-white"
                    : "border-transparent"
                }`}
                onClick={() => setMetodoPago("whatsapp")}
                style={{ cursor: "pointer" }}
              >
                <MessageCircle size={18} className="me-2 text-success" />
                <span className="small fw-medium">
                  WhatsApp (Coordinar con vendedor)
                </span>
              </div>

              <div
                className={`d-flex align-items-center p-2 rounded-3 cursor-pointer border ${
                  metodoPago === "digital"
                    ? "border-dark bg-white"
                    : "border-transparent"
                }`}
                onClick={() => setMetodoPago("digital")}
                style={{ cursor: "pointer" }}
              >
                <CreditCard size={18} className="me-2 text-primary" />
                <span className="small fw-medium">
                  Pago Digital (Tarjeta/Débito)
                </span>
              </div>
            </div>
          </>
        )}
      </div>

      {items.length > 0 && (
        <div className="offcanvas-footer p-4 border-top bg-white">
          <div className="d-flex justify-content-between mb-3 fw-bold px-1">
            <span className="text-muted">TOTAL A PAGAR:</span>
            <span className="text-dark fs-4">${total.toFixed(2)}</span>
          </div>
          <button
            onClick={procesarCompra}
            className={`btn w-100 py-3 rounded-pill fw-bold shadow-sm transition-all ${
              metodoPago === "whatsapp" ? "btn-success" : "btn-dark"
            }`}
          >
            {metodoPago === "whatsapp"
              ? "PEDIR POR WHATSAPP"
              : "PAGAR CON TARJETA"}
          </button>
          <p
            className="text-center mt-3 text-muted"
            style={{ fontSize: "0.65rem" }}
          >
            <small>🔒 Pago procesado de forma segura</small>
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
