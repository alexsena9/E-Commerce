import React, { useState, useEffect } from "react";
import { Menu, Search, ShoppingBag, ArrowRight } from "lucide-react";

const Navbar = ({
  cuentaCarrito,
  busqueda,
  setBusqueda,
  productos,
  onVerDetalle,
}) => {
  const [sugerencias, setSugerencias] = useState([]);
  const [mostrarSugerencias, setMostrarSugerencias] = useState(false);

  useEffect(() => {
    if (busqueda.length > 1) {
      const filtrados = productos
        .filter((p) => p.nombre.toLowerCase().includes(busqueda.toLowerCase()))
        .slice(0, 5);
      setSugerencias(filtrados);
      setMostrarSugerencias(true);
    } else {
      setSugerencias([]);
      setMostrarSugerencias(false);
    }
  }, [busqueda, productos]);

  return (
    <nav
      className="navbar fixed-top bg-white border-bottom py-3 shadow-sm"
      style={{ zIndex: 1050 }}
    >
      <div className="container">
        <div className="d-flex align-items-center gap-3">
          <button
            className="btn btn-light rounded-circle p-2 border-0 shadow-sm"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebarFiltros"
          >
            <Menu size={24} />
          </button>
          <a className="navbar-brand m-0 p-0" href="/">
            <h4 className="fw-black mb-0 tracking-tighter">
              ALEXIS<span className="fw-light text-muted">STUDIO</span>
            </h4>
          </a>
        </div>

        <div
          className="flex-grow-1 mx-4 d-none d-md-block position-relative"
          style={{ maxWidth: "450px" }}
        >
          <div className="input-group input-group-sm">
            <span className="input-group-text bg-light border-0 ps-3 rounded-start-pill">
              <Search size={16} className="text-muted" />
            </span>
            <input
              type="text"
              className="form-control bg-light border-0 py-2 rounded-end-pill"
              placeholder="¿Qué estás buscando hoy?"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              onBlur={() => setTimeout(() => setMostrarSugerencias(false), 200)}
              onFocus={() => busqueda.length > 1 && setMostrarSugerencias(true)}
            />
          </div>

          {mostrarSugerencias && sugerencias.length > 0 && (
            <div
              className="position-absolute top-100 start-0 w-100 bg-white shadow-lg rounded-4 mt-2 overflow-hidden border border-light animate-fade-up"
              style={{ zIndex: 1100 }}
            >
              <div className="p-2">
                <label
                  className="px-3 py-2 smaller fw-black text-muted text-uppercase"
                  style={{ fontSize: "0.6rem" }}
                >
                  Sugerencias de productos
                </label>
                {sugerencias.map((p) => (
                  <div
                    key={p.id}
                    className="d-flex align-items-center gap-3 p-2 rounded-3 hover-bg-light cursor-pointer transition-all sugerencia-item"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      onVerDetalle(p);
                      setBusqueda(p.nombre);
                      setMostrarSugerencias(false);
                    }}
                  >
                    <img
                      src={p.imagen}
                      alt={p.nombre}
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "cover",
                      }}
                      className="rounded-2"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=100";
                      }}
                    />
                    <div className="flex-grow-1">
                      <h6 className="mb-0 fw-bold small text-dark">
                        {p.nombre}
                      </h6>
                      <span className="text-primary fw-black small">
                        ${p.precio}
                      </span>
                    </div>
                    <ArrowRight size={14} className="text-muted opacity-50" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="d-flex align-items-center gap-2">
          <button
            className="btn btn-dark rounded-pill px-3 d-flex align-items-center gap-2 position-relative shadow-sm"
            data-bs-toggle="offcanvas"
            data-bs-target="#cartSidebar"
          >
            <ShoppingBag size={18} />
            <span className="fw-bold d-none d-sm-inline small">CARRITO</span>
            {cuentaCarrito > 0 && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger border border-white"
                style={{
                  width: "20px",
                  height: "20px",
                  padding: "0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "10px",
                }}
              >
                {cuentaCarrito}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
