import React from "react";
import { Menu, Search, ShoppingBag } from "lucide-react";

const Navbar = ({ cuentaCarrito, busqueda, setBusqueda }) => {
  return (
    <nav className="navbar fixed-top bg-white border-bottom py-3 shadow-sm">
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
          className="flex-grow-1 mx-4 d-none d-md-block"
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
            />
          </div>
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
