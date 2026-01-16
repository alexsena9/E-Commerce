import React from "react";
import { ShoppingCart, Store, User, Search } from "lucide-react";

const Navbar = ({
  cuentaCarrito,
  busqueda,
  setBusqueda,
  productosSugeridos,
  onSeleccionarSugerencia,
}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top py-3 shadow-sm">
      <div className="container">
        <a
          className="navbar-brand d-flex align-items-center fw-bold"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.location.reload();
          }}
        >
          <Store className="me-2 text-primary" size={24} />
          ALEXIS<span className="text-muted fw-light">STUDIO</span>
        </a>

        <div
          className="flex-grow-1 mx-4 d-none d-md-block position-relative"
          style={{ maxWidth: "400px" }}
        >
          <div className="position-relative">
            <Search
              className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
              size={18}
            />
            <input
              type="text"
              className="form-control rounded-pill ps-5 bg-light border-0"
              placeholder="Buscar productos..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>

          {busqueda.length > 0 && (
            <div
              className="position-absolute w-100 bg-white shadow-lg rounded-4 mt-2 overflow-hidden border"
              style={{ zIndex: 3000 }}
            >
              {productosSugeridos.length > 0 ? (
                productosSugeridos.slice(0, 5).map((p) => (
                  <div
                    key={p.id}
                    className="d-flex align-items-center p-2 border-bottom hover-bg-light"
                    style={{ cursor: "pointer" }}
                    onClick={() => onSeleccionarSugerencia(p)}
                  >
                    <img
                      src={p.imagen}
                      alt={p.nombre}
                      className="rounded"
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="ms-3">
                      <p className="mb-0 small fw-bold text-dark">{p.nombre}</p>
                      <p className="mb-0 small text-primary">${p.precio}</p>
                    </div>
                    <div
                      className="ms-auto text-muted"
                      style={{ fontSize: "0.7rem" }}
                    >
                      Ver detalle
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-3 text-center small text-muted">
                  No hay resultados
                </div>
              )}
            </div>
          )}
        </div>

        <div className="d-flex align-items-center gap-3">
          <button
            className="btn btn-dark rounded-pill px-4 d-flex align-items-center gap-2"
            data-bs-toggle="offcanvas"
            data-bs-target="#cartOffcanvas"
          >
            <ShoppingCart size={18} />
            <span className="badge bg-white text-dark rounded-circle">
              {cuentaCarrito}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
