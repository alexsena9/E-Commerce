import React from "react";
import { SlidersHorizontal } from "lucide-react";

const Filters = ({
  categorias,
  categoriaActiva,
  setCategoria,
  precioMax,
  setPrecioMax,
  totalResultados,
}) => {
  return (
    <div className="container mt-5 pt-2">
      <div className="bg-white rounded-5 p-4 shadow-sm border border-light">
        <div className="row align-items-center gy-4">
          <div className="col-md-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <SlidersHorizontal size={16} className="text-primary" />
              <span className="fw-bold small tracking-tighter text-uppercase">
                Categorías
              </span>
            </div>
            <div className="d-flex flex-wrap gap-2">
              <button
                onClick={() => setCategoria("Todos")}
                className={`btn btn-sm rounded-pill px-3 fw-bold ${categoriaActiva === "Todos" ? "btn-dark" : "btn-light text-muted"}`}
              >
                Todos
              </button>
              {categorias.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoria(cat)}
                  className={`btn btn-sm rounded-pill px-3 fw-bold ${categoriaActiva === cat ? "btn-dark" : "btn-light text-muted"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="col-md-4 border-start-md border-light px-md-5">
            <div className="d-flex justify-content-between mb-2">
              <span className="fw-bold small text-muted">PRECIO MÁXIMO</span>
              <span className="fw-black text-primary">${precioMax}</span>
            </div>
            <input
              type="range"
              className="form-range"
              min="0"
              max="1500"
              step="50"
              value={precioMax}
              onChange={(e) => setPrecioMax(parseInt(e.target.value))}
            />
          </div>
          <div className="col-md-4 text-md-end border-start-md border-light">
            <p className="text-muted small mb-0 fw-medium">Mostrando</p>
            <h5 className="fw-black mb-0">{totalResultados} Productos</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
