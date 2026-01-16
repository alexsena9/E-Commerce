import React from "react";
import { ShoppingBag, Search, Store } from "lucide-react";

const Navbar = ({
  cuentaCarrito,
  busqueda,
  setBusqueda,
  productosSugeridos,
  onSeleccionarSugerencia,
}) => {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top py-3 border-bottom border-light"
      style={{
        backdropFilter: "blur(15px)",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        zIndex: 1050,
      }}
    >
      <div className="container">
        <a
          className="navbar-brand d-flex align-items-center fw-black"
          href="/"
          style={{ letterSpacing: "-1.5px", fontSize: "1.4rem" }}
        >
          <div
            className="bg-dark text-white rounded-3 p-1 me-2 d-flex align-items-center justify-content-center"
            style={{ width: "32px", height: "32px" }}
          >
            <Store size={18} />
          </div>
          ALEXIS<span className="fw-light text-muted">STUDIO</span>
        </a>

        <div
          className="flex-grow-1 mx-lg-5 mx-3 position-relative"
          style={{ maxWidth: "400px" }}
        >
          <div className="position-relative">
            <Search
              className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
              size={16}
            />
            <input
              type="text"
              className="form-control border-0 rounded-pill ps-5"
              style={{
                backgroundColor: "rgba(0,0,0,0.04)",
                fontSize: "0.9rem",
                padding: "10px 20px",
              }}
              placeholder="¿Qué estás buscando?"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>

          {busqueda.length > 0 && (
            <div
              className="position-absolute w-100 bg-white shadow-lg rounded-4 mt-2 overflow-hidden border-0 animate-fade-up"
              style={{ zIndex: 3000 }}
            >
              {productosSugeridos.length > 0 ? (
                productosSugeridos.slice(0, 5).map((p) => (
                  <div
                    key={p.id}
                    className="d-flex align-items-center p-3 border-bottom border-light hover-bg-light"
                    style={{ cursor: "pointer", transition: "0.2s" }}
                    onClick={() => onSeleccionarSugerencia(p)}
                  >
                    <img
                      src={p.imagen}
                      alt={p.nombre}
                      className="rounded-3"
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="ms-3">
                      <p className="mb-0 small fw-bold text-dark">{p.nombre}</p>
                      <p
                        className="mb-0 smaller text-muted"
                        style={{ fontSize: "0.75rem" }}
                      >
                        ${p.precio}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-3 text-center small text-muted fst-italic">
                  No hay coincidencias
                </div>
              )}
            </div>
          )}
        </div>

        <button
          className="btn btn-dark-premium d-flex align-items-center gap-2 py-2 px-4 shadow-sm"
          data-bs-toggle="offcanvas"
          data-bs-target="#cartOffcanvas"
        >
          <ShoppingBag size={18} />
          <span className="small d-none d-md-inline">CARRITO</span>
          <span className="badge bg-white text-dark rounded-pill ms-1">
            {cuentaCarrito}
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
