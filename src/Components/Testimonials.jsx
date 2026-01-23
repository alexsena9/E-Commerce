import React from "react";
import { Star, CheckCircle2 } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Lucas M.",
      text: "La calidad de los auriculares superó mis expectativas. El envío llegó en menos de 24hs.",
      stars: 5,
    },
    {
      id: 2,
      name: "Martina G.",
      text: "Excelente atención por WhatsApp. Me asesoraron con el smartwatch perfectamente.",
      stars: 5,
    },
    {
      id: 3,
      name: "Julián R.",
      text: "Precios competitivos y productos originales. Mi nueva tienda favorita de tech.",
      stars: 4,
    },
  ];

  return (
    <section className="py-5 bg-white border-top border-bottom">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-black h3 mb-1">CLIENTES SATISFECHOS</h2>
          <p className="text-muted small fw-bold tracking-widest text-uppercase">
            Opiniones reales de nuestra comunidad
          </p>
        </div>
        <div className="row g-4">
          {reviews.map((r) => (
            <div key={r.id} className="col-md-4">
              <div className="p-4 rounded-4 bg-light h-100 border border-white shadow-sm">
                <div className="d-flex gap-1 text-warning mb-3">
                  {[...Array(r.stars)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" stroke="none" />
                  ))}
                </div>
                <p className="small text-dark mb-3 fst-italic">"{r.text}"</p>
                <div className="d-flex align-items-center gap-2">
                  <div
                    className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center small fw-bold"
                    style={{
                      width: "24px",
                      height: "24px",
                      fontSize: "0.6rem",
                    }}
                  >
                    {r.name.charAt(0)}
                  </div>
                  <span className="small fw-bold">{r.name}</span>
                  <CheckCircle2 size={12} className="text-success ms-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
