import React from "react";
import { Star, ArrowRight } from "lucide-react";

const FeaturedProducts = ({ productos, onVerDetalle }) => {
  const destacados = productos.slice(0, 3);

  return (
    <section className="py-4 bg-white">
      <div className="container">
        <div className="d-flex align-items-center gap-2 mb-4">
          <Star size={18} className="text-primary" fill="currentColor" />
          <h2 className="fw-black h4 mb-0" style={{ letterSpacing: "-1px" }}>
            RECOMENDADOS PARA TI
          </h2>
        </div>

        <div className="row g-4">
          {destacados.map((p) => (
            <div key={p.id} className="col-lg-4 col-md-6">
              <div
                className="position-relative rounded-5 overflow-hidden border border-light shadow-sm bg-light transition-all hover-card"
                style={{ cursor: "pointer", height: "280px" }}
                onClick={() => onVerDetalle(p)}
              >
                <img
                  src={p.imagen}
                  alt={p.nombre}
                  className="w-100 h-100 object-fit-cover opacity-90"
                />
                <div
                  className="position-absolute bottom-0 start-0 w-100 p-4"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                  }}
                >
                  <span
                    className="badge bg-primary rounded-pill mb-2"
                    style={{ fontSize: "0.6rem" }}
                  >
                    DESTACADO
                  </span>
                  <h5 className="text-white fw-bold mb-1">{p.nombre}</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-white opacity-75 fw-bold">
                      ${p.precio}
                    </span>
                    <button className="btn btn-sm btn-white bg-white rounded-circle p-2">
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
