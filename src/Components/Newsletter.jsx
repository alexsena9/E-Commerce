import React from "react";
import { Send } from "lucide-react";

const Newsletter = () => {
  return (
    <div className="container my-5">
      <div className="bg-dark text-white rounded-5 p-5 text-center position-relative overflow-hidden">
        <div className="position-relative z-1">
          <h2 className="fw-black mb-2" style={{ letterSpacing: "-1px" }}>
            ÚNETE AL CLUB ALEXIS STUDIO
          </h2>
          <p className="opacity-75 mb-4 mx-auto" style={{ maxWidth: "500px" }}>
            Recibe un 10% de descuento en tu primera compra y accede a
            lanzamientos exclusivos.
          </p>
          <div className="input-group mx-auto" style={{ maxWidth: "450px" }}>
            <input
              type="email"
              className="form-control border-0 py-3 ps-4 rounded-start-pill shadow-none"
              placeholder="Tu email..."
            />
            <button className="btn btn-primary px-4 rounded-end-pill fw-bold d-flex align-items-center gap-2">
              SUSCRIBIRSE <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
