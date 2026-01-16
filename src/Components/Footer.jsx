import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white pt-5 pb-4 border-top mt-5 shadow-sm">
      <div className="container">
        <div className="row gy-4 mb-5 text-center text-md-start justify-content-between">
          <div className="col-md-2 col-6">
            <h6
              className="fw-bold mb-3 small text-uppercase"
              style={{ letterSpacing: "1px" }}
            >
              Ayuda
            </h6>
            <ul className="list-unstyled d-grid gap-2 small text-muted">
              <li>Cómo comprar</li>
              <li>Rastrear pedido</li>
              <li>Envíos y devoluciones</li>
              <li>Términos y condiciones</li>
            </ul>
          </div>
          <div className="col-md-2 col-6">
            <h6
              className="fw-bold mb-3 small text-uppercase"
              style={{ letterSpacing: "1px" }}
            >
              Empresa
            </h6>
            <ul className="list-unstyled d-grid gap-2 small text-muted">
              <li>Quienes somos</li>
              <li>Sucursales</li>
              <li>Contacto</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="col-md-2 col-6">
            <h6
              className="fw-bold mb-3 small text-uppercase"
              style={{ letterSpacing: "1px" }}
            >
              Mi cuenta
            </h6>
            <ul className="list-unstyled d-grid gap-2 small text-muted">
              <li>Mis compras</li>
              <li>Mis direcciones</li>
              <li>Wish List</li>
            </ul>
          </div>
          <div className="col-md-2 col-6">
            <h6
              className="fw-bold mb-3 small text-uppercase"
              style={{ letterSpacing: "1px" }}
            >
              Eventos
            </h6>
            <ul className="list-unstyled d-grid gap-2 small text-muted">
              <li>Black Friday</li>
              <li>Navidad</li>
              <li>Ciberlunes</li>
            </ul>
          </div>
        </div>

        <div className="border-top border-bottom py-4 mb-4">
          <div
            className="d-flex flex-wrap justify-content-center align-items-center gap-4 opacity-40 grayscale-filter"
            style={{ fontSize: "0.75rem" }}
          >
            <span className="fw-bold">OCA</span>
            <span className="fw-bold">VISA</span>
            <span className="fw-bold">MASTERCARD</span>
            <span className="fw-bold">BROU</span>
            <span className="fw-bold">MERCADO PAGO</span>
            <span className="fw-bold">PASS CARD</span>
            <span className="fw-bold">ANDA</span>
            <span className="fw-bold">ABITAB</span>
            <span className="fw-bold">RED PAGOS</span>
            <span className="fw-bold">BBVA</span>
            <span className="fw-bold">SANTANDER</span>
          </div>
        </div>

        <div
          className="d-flex flex-column flex-md-row justify-content-between align-items-center text-muted"
          style={{ fontSize: "0.7rem" }}
        >
          <div className="text-center text-md-start">
            <p className="mb-0">© Copyright 2026 / ALEXIS STUDIO</p>
            <p className="mb-0 opacity-50 fst-italic">
              Hecho con ♥ para e-commerces
            </p>
          </div>
          <div
            className="fw-bold mt-2 mt-md-0"
            style={{ letterSpacing: "2px" }}
          >
            ALEXIS<span className="fw-light">STUDIO</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
