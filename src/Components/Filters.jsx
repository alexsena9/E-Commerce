import React from "react";
import { ArrowUpDown, Filter, ChevronRight } from "lucide-react";

const Filters = ({
  categorias,
  categoriaActiva,
  setCategoria,
  precioMax,
  setPrecioMax,
  orden,
  setOrden,
  totalResultados,
}) => {
  const cerrarSidebar = () => {
    const elemento = document.getElementById("sidebarFiltros");
    if (elemento && window.bootstrap) {
      const instance = window.bootstrap.Offcanvas.getInstance(elemento);
      if (instance) instance.hide();
    }
  };

  const seleccionarCategoria = (cat) => {
    setCategoria(cat);
    cerrarSidebar();
  };

  return (
    <div
      className="offcanvas offcanvas-start border-0 shadow"
      tabIndex="-1"
      id="sidebarFiltros"
      style={{ width: "320px" }}
    >
      <div className="offcanvas-header bg-dark text-white p-4">
        <h5 className="offcanvas-title fw-black d-flex align-items-center gap-2">
          <Filter size={20} /> FILTRAR
        </h5>
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
        ></button>
      </div>

      <div className="offcanvas-body p-4">
        <div className="mb-4">
          <label
            className="smaller fw-black text-muted text-uppercase mb-3 d-block tracking-widest"
            style={{ fontSize: "0.7rem" }}
          >
            CATEGORÍAS ({totalResultados})
          </label>
          <div className="d-flex flex-column gap-1">
            <button
              onClick={() => seleccionarCategoria("Todos")}
              className={`btn text-start rounded-3 px-3 py-3 fw-bold border-0 transition-all ${
                categoriaActiva === "Todos" ? "btn-dark shadow" : "btn-light"
              }`}
            >
              Todos los productos
            </button>
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => seleccionarCategoria(cat)}
                className={`btn text-start rounded-3 px-3 py-3 fw-bold border-0 transition-all d-flex align-items-center justify-content-between ${
                  categoriaActiva === cat ? "btn-dark shadow" : "btn-light"
                }`}
              >
                {cat}
                <ChevronRight size={16} opacity={0.5} />
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4 pt-4 border-top">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <label
              className="smaller fw-black text-muted text-uppercase tracking-widest"
              style={{ fontSize: "0.7rem" }}
            >
              PRECIO MÁXIMO
            </label>
            <span className="fw-black text-dark">
              ${precioMax.toLocaleString()}
            </span>
          </div>
          <input
            type="range"
            className="form-range"
            min="0"
            max="6000"
            step="100"
            value={precioMax}
            onChange={(e) => setPrecioMax(Number(e.target.value))}
          />
        </div>

        <div className="pt-4 border-top">
          <label
            className="smaller fw-black text-muted text-uppercase mb-3 d-block tracking-widest"
            style={{ fontSize: "0.7rem" }}
          >
            ORDENAR POR
          </label>
          <select
            className="form-select border-0 bg-light fw-bold py-3"
            value={orden}
            onChange={(e) => {
              setOrden(e.target.value);
              cerrarSidebar();
            }}
          >
            <option value="recomendados">Recomendados</option>
            <option value="precio-asc">Precio: Menor a Mayor</option>
            <option value="precio-desc">Precio: Mayor a Menor</option>
            <option value="nombre-az">Nombre: A-Z</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
