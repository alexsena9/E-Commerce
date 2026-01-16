import React from "react";
import { ShoppingCart, Store, User } from "lucide-react";

const Navbar = ({ cuentaCarrito }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top py-3 shadow-sm">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center fw-bold" href="#">
          <Store className="me-2 text-primary" size={24} />
          ALEXIS<span className="text-muted fw-light">STUDIO</span>
        </a>

        <div className="d-flex align-items-center gap-3">
          <User className="text-muted" size={20} />
          <button className="btn btn-dark rounded-pill px-4 d-flex align-items-center gap-2">
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
