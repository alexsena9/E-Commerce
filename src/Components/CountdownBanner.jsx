import React, { useState, useEffect } from "react";
import { Timer, Zap } from "lucide-react";

const CountdownBanner = () => {
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
    <div className="bg-primary text-white py-3">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-center gap-3">
        <div className="d-flex align-items-center gap-2">
          <Zap size={20} fill="white" className="animate-pulse" />
          <span className="fw-black tracking-tighter h5 mb-0">
            VENTA FLASH: 30% OFF EN GAMING
          </span>
        </div>

        <div className="d-flex align-items-center gap-2 bg-dark bg-opacity-25 px-4 py-2 rounded-pill">
          <Timer size={18} />
          <div className="d-flex gap-2 fw-black font-monospace">
            <span>{String(timeLeft.horas).padStart(2, "0")}h</span>:
            <span>{String(timeLeft.minutos).padStart(2, "0")}m</span>:
            <span>{String(timeLeft.segundos).padStart(2, "0")}s</span>
          </div>
        </div>

        <button className="btn btn-white btn-sm rounded-pill fw-black px-4 shadow-sm hover-scale">
          COMPRAR AHORA
        </button>
      </div>
    </div>
  );
};

export default CountdownBanner;
