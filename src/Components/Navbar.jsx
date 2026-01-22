import React from "react";
import { ShoppingBag, Search, Store, Truck } from "lucide-react";

const Navbar = ({
  cuentaCarrito,
  busqueda,
  setBusqueda,
  productosSugeridos,
  onSeleccionarSugerencia,
}) => {
  return (
    <>
      <div
        className="bg-dark text-white py-2 text-center small fw-bold tracking-widest w-100 fixed-top"
        style={{ fontSize: "0.65rem", zIndex: 1060 }}
      >
        <Truck size={12} className="me-2 text-primary d-inline" />
        ENVÍO GRATIS EN COMPRAS SUPERIORES A $500
      </div>

      <nav
        className="navbar navbar-expand-lg fixed-top py-3"
        style={{
          backdropFilter: "blur(20px) saturate(180%)",
          backgroundColor: "rgba(255, 255, 255, 0.75)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
          zIndex: 1050,
          marginTop: "31px",
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
            <div className="input-group input-group-sm bg-light rounded-pill px-3 py-1 border-0">
              <span className="input-group-text bg-transparent border-0 text-muted">
                <Search size={16} />
              </span>
              <input
                type="text"
                className="form-control bg-transparent border-0 shadow-none small"
                placeholder="Buscar tecnología..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </div>

            {busqueda && (
              <div
                className="position-absolute top-100 start-0 w-100 bg-white shadow-lg rounded-4 mt-2 overflow-hidden border border-light animate-fade-in"
                style={{ zIndex: 1100 }}
              >
                {productosSugeridos.length > 0 ? (
                  productosSugeridos.map((p) => (
                    <div
                      key={p.id}
                      className="p-3 d-flex align-items-center border-bottom border-light hover-bg-light transition-all"
                      onClick={() => onSeleccionarSugerencia(p)}
                      style={{ cursor: "pointer", userSelect: "none" }}
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
                        <p className="mb-0 small fw-bold text-dark">
                          {p.nombre}
                        </p>
                        <p className="mb-0 smaller text-muted">${p.precio}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-3 text-center small text-muted">
                    Sin resultados
                  </div>
                )}
              </div>
            )}
          </div>

          <button
            className="btn btn-dark d-flex align-items-center gap-2 py-2 px-4 rounded-pill shadow-sm"
            data-bs-toggle="offcanvas"
            data-bs-target="#cartOffcanvas"
          >
            <ShoppingBag size={18} />
            <span
              key={cuentaCarrito}
              className="badge bg-white text-dark rounded-pill ms-1 animate-bounce-short"
            >
              {cuentaCarrito}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
