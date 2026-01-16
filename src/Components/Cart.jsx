import React from "react";
import "./Cart.css";

const Cart = ({ cart, setCart, totalCarrito }) => {
  const aumentarCantidad = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  const disminuirCantidad = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.cantidad > 1
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
    );
  };

  const eliminarDelCarrito = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const enviarWhatsApp = () => {
    if (cart.length === 0) return alert("El carrito está vacío");

    const mensajeBase = "¡Hola! Quiero realizar el siguiente pedido:\n\n";
    const productosMsg = cart
      .map(
        (p) =>
          `- ${p.nombre} (x${p.cantidad}): $${(
            p.precio * p.cantidad
          ).toLocaleString()}`
      )
      .join("\n");
    const totalMsg = `\n\n*Total a pagar: $${totalCarrito.toLocaleString()}*`;

    const url = `https://wa.me/5491100000000?text=${encodeURIComponent(
      mensajeBase + productosMsg + totalMsg
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="cart-container">
      <h2>Tu Carrito</h2>

      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.imagen} alt={item.nombre} />
                <div className="item-details">
                  <h4>{item.nombre}</h4>
                  <p>${item.precio.toLocaleString()}</p>
                  <div className="quantity-controls">
                    <button onClick={() => disminuirCantidad(item.id)}>
                      -
                    </button>
                    <span>{item.cantidad}</span>
                    <button onClick={() => aumentarCantidad(item.id)}>+</button>
                  </div>
                </div>
                <button
                  className="btn-eliminar"
                  onClick={() => eliminarDelCarrito(item.id)}
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>

          <div className="cart-footer">
            <h3>Total: ${totalCarrito.toLocaleString()}</h3>

            <div className="cart-actions">
              <button className="btn-whatsapp" onClick={enviarWhatsApp}>
                Enviar pedido por WhatsApp
              </button>

              <button
                className="btn-card"
                onClick={() => alert("Redirigiendo a pasarela de pago...")}
              >
                Pagar con Tarjeta
              </button>

              <button className="btn-vaciar" onClick={() => setCart([])}>
                Vaciar Carrito
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
