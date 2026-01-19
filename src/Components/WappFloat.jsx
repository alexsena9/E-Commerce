import React from "react";

const WappFloat = () => {
  const numero = "5491122334455";
  const mensaje = encodeURIComponent(
    "¡Hola Alexis Studio! Tengo una consulta sobre un producto.",
  );

  return (
    <a
      href={`https://wa.me/${numero}?text=${mensaje}`}
      className="wapp-floating-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={{ width: "35px", height: "35px" }}
      />
      <span className="wapp-tooltip">¿Consultas? Escríbenos</span>
    </a>
  );
};

export default WappFloat;
