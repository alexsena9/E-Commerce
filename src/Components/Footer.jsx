import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ShieldCheck,
  RotateCcw,
  Headset,
  CreditCard,
} from "lucide-react";

const Footer = () => {
  const trustItems = [
    {
      icon: <ShieldCheck size={28} />,
      title: "PAGO SEGURO",
      desc: "Cifrado SSL 256-bit",
    },
    {
      icon: <RotateCcw size={28} />,
      title: "DEVOLUCIONES",
      desc: "30 días de garantía",
    },
    {
      icon: <Headset size={28} />,
      title: "SOPORTE 24/7",
      desc: "Chat en vivo siempre",
    },
    {
      icon: <CreditCard size={28} />,
      title: "CUOTAS SIN INTERÉS",
      desc: "Con todas las tarjetas",
    },
  ];

  return (
    <footer className="bg-white border-top mt-5">
      <div className="container py-5 border-bottom">
        <div className="row g-4">
          {trustItems.map((item, index) => (
            <div key={index} className="col-6 col-md-3 text-center">
              <div className="text-primary mb-3 d-flex justify-content-center">
                {item.icon}
              </div>
              <h6 className="fw-black small mb-1 tracking-tighter">
                {item.title}
              </h6>
              <p className="text-muted mb-0" style={{ fontSize: "0.7rem" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-4 justify-content-between">
          <div className="col-lg-4 col-md-12 text-center text-lg-start">
            <a
              className="navbar-brand fw-black mb-3 d-block"
              href="/"
              style={{ letterSpacing: "-1.5px", fontSize: "1.4rem" }}
            >
              ALEXIS<span className="fw-light text-muted">STUDIO</span>
            </a>
            <p
              className="text-muted small mb-4 mx-auto mx-lg-0"
              style={{ maxWidth: "300px" }}
            >
              Líderes en tecnología y estilo de vida digital. Calidad
              garantizada en cada producto.
            </p>
            <div className="d-flex gap-3 text-muted justify-content-center justify-content-lg-start mb-4 mb-lg-0">
              <Facebook size={18} className="cursor-pointer hover-text-dark" />
              <Instagram size={18} className="cursor-pointer hover-text-dark" />
              <Twitter size={18} className="cursor-pointer hover-text-dark" />
              <Youtube size={18} className="cursor-pointer hover-text-dark" />
            </div>
          </div>

          <div className="col-6 col-md-auto">
            <h6 className="fw-black small mb-3">AYUDA</h6>
            <ul className="list-unstyled text-muted small d-grid gap-2">
              <li className="hover-text-dark cursor-pointer">Cómo comprar</li>
              <li className="hover-text-dark cursor-pointer">
                Envíos y devoluciones
              </li>
              <li className="hover-text-dark cursor-pointer">
                Términos y condiciones
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-auto">
            <h6 className="fw-black small mb-3">EMPRESA</h6>
            <ul className="list-unstyled text-muted small d-grid gap-2">
              <li className="hover-text-dark cursor-pointer">Quienes somos</li>
              <li className="hover-text-dark cursor-pointer">Sucursales</li>
              <li className="hover-text-dark cursor-pointer">Contacto</li>
            </ul>
          </div>

          <div className="col-6 col-md-auto">
            <h6 className="fw-black small mb-3">MI CUENTA</h6>
            <ul className="list-unstyled text-muted small d-grid gap-2">
              <li className="hover-text-dark cursor-pointer">Mis compras</li>
              <li className="hover-text-dark cursor-pointer">Wish List</li>
            </ul>
          </div>
        </div>

        <hr className="opacity-10 my-5" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-4">
          <p className="smaller text-muted mb-0">
            © 2026 ALEXIS STUDIO. Todos los derechos reservados.
          </p>
          <div
            className="d-flex flex-wrap justify-content-center gap-3 opacity-50 fw-bold grayscale-filter"
            style={{ fontSize: "0.65rem" }}
          >
            <span>VISA</span>
            <span>MASTERCARD</span>
            <span>MERCADO PAGO</span>
            <span>PAYPAL</span>
            <span>TRANSFERENCIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
