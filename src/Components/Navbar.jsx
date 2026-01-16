import React from "react";
import { ShoppingCart, Store, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top py-3 border-bottom border-secondary">
      <div className="container">
        <a
          className="navbar-brand d-flex align-items-center fw-bolder fs-3"
          href="#"
        >
          <Store className="text-info me-2" size={28} />
          ALEXIS<span className="text-info">SHOP</span>
        </a>

        <div className="d-flex align-items-center gap-4">
          <User
            className="text-secondary hover-white cursor-pointer"
            size={24}
          />
          <button className="btn btn-outline-info rounded-pill px-4 d-flex align-items-center gap-2">
            <ShoppingCart size={20} />
            <span className="badge bg-info text-dark rounded-circle">0</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
