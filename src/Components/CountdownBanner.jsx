import React, { useState, useEffect } from "react";
import { Timer, Zap, ArrowRight } from "lucide-react";

const CountdownBanner = ({ onAction }) => {
  const [timeLeft, setTimeLeft] = useState({
    horas: 12,
    minutos: 45,
    segundos: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.segundos > 0) return { ...prev, segundos: prev.segundos - 1 };
        if (prev.minutos > 0)
          return { ...prev, minutos: prev.minutos - 1, segundos: 59 };
        if (prev.horas > 0)
          return { ...prev, horas: prev.horas - 1, minutos: 59, segundos: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{ backgroundColor: "#ff6b00" }}
      className="text-white py-3 shadow-sm"
    >
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-center gap-3">
        <div className="d-flex align-items-center gap-2">
          <div className="bg-white p-1 rounded-circle">
            <Zap
              size={20}
              fill="#ff6b00"
              stroke="none"
              className="animate-pulse"
            />
          </div>
          <span className="fw-black tracking-tighter h5 mb-0 text-uppercase">
            OFERTA RELÁMPAGO: 30% OFF EN GAMING
          </span>
        </div>

        <div className="d-flex align-items-center gap-2 bg-black bg-opacity-25 px-4 py-2 rounded-pill border border-white border-opacity-25">
          <Timer size={18} />
          <div
            className="d-flex gap-2 fw-black font-monospace"
            style={{ fontSize: "1.1rem" }}
          >
            <span>{String(timeLeft.horas).padStart(2, "0")}H</span>:
            <span>{String(timeLeft.minutos).padStart(2, "0")}M</span>:
            <span>{String(timeLeft.segundos).padStart(2, "0")}S</span>
          </div>
        </div>

        <button
          onClick={onAction}
          className="btn btn-dark rounded-pill fw-black px-5 py-2 shadow-lg hover-scale d-flex align-items-center gap-2 border-0"
          style={{ letterSpacing: "1px", fontSize: "0.9rem" }}
        >
          COMPRAR AHORA <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default CountdownBanner;
