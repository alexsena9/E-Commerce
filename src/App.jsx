import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import { productos } from "./productos";

function App() {
  const [carrito, setCarrito] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 12;

  const ultimoIndice = paginaActual * productosPorPagina;
  const primerIndice = ultimoIndice - productosPorPagina;
  const productosVisibles = productos.slice(primerIndice, ultimoIndice);
  const totalPaginas = Math.ceil(productos.length / productosPorPagina);
  const numerosPagina = [...Array(totalPaginas).keys()].map((n) => n + 1);

  const agregarAlCarrito = (producto) => setCarrito([...carrito, producto]);
  const eliminarDelCarrito = (index) =>
    setCarrito(carrito.filter((_, i) => i !== index));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [paginaActual]);

  return (
    <div className="min-vh-100 bg-white">
      <Navbar cuentaCarrito={carrito.length} />
      <Cart items={carrito} onRemove={eliminarDelCarrito} />

      <main className="container pt-5 mt-5">
        <header className="py-5 text-center">
          <h2 className="fw-light text-muted mb-0 small text-uppercase tracking-widest">
            Minimal Collection
          </h2>
          <h1 className="fw-black text-dark display-5 tracking-tighter">
            ALEXIS STUDIO
          </h1>
          <div
            className="mx-auto bg-dark mt-2 mb-3"
            style={{ height: "1px", width: "30px" }}
          ></div>
          <p className="text-muted small">
            Mostrando {primerIndice + 1}-
            {Math.min(ultimoIndice, productos.length)} de {productos.length}{" "}
            productos
          </p>
        </header>

        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 pb-5">
          {productosVisibles.map((p) => (
            <ProductCard key={p.id} producto={p} onAgregar={agregarAlCarrito} />
          ))}
        </div>

        <nav className="d-flex justify-content-center pb-5 mt-4">
          <ul className="pagination align-items-center gap-2">
            {paginaActual > 1 && (
              <>
                <li className="page-item">
                  <button
                    className="btn btn-link text-decoration-none text-muted small fw-bold"
                    onClick={() => setPaginaActual(1)}
                  >
                    INICIO
                  </button>
                </li>
                <li className="page-item">
                  <button
                    className="btn btn-outline-secondary border-0 rounded-circle px-3"
                    onClick={() => setPaginaActual(paginaActual - 1)}
                  >
                    &lsaquo;
                  </button>
                </li>
              </>
            )}

            {numerosPagina
              .slice(
                Math.max(0, paginaActual - 3),
                Math.min(totalPaginas, paginaActual + 2)
              )
              .map((num) => (
                <li key={num} className="page-item">
                  <button
                    className={`btn rounded-circle fw-bold mx-1 transition-all shadow-sm`}
                    style={{
                      width: "40px",
                      height: "40px",
                      fontSize: "0.85rem",
                      backgroundColor:
                        paginaActual === num ? "#212529" : "transparent",
                      color: paginaActual === num ? "#fff" : "#6c757d",
                      border:
                        paginaActual === num
                          ? "1px solid #212529"
                          : "1px solid #dee2e6",
                    }}
                    onClick={() => setPaginaActual(num)}
                  >
                    {num}
                  </button>
                </li>
              ))}

            {paginaActual < totalPaginas && (
              <li className="page-item">
                <button
                  className="btn btn-outline-secondary border-0 rounded-circle px-3"
                  onClick={() => setPaginaActual(paginaActual + 1)}
                >
                  &rsaquo;
                </button>
              </li>
            )}
          </ul>
        </nav>
      </main>

      <footer className="py-5 bg-white border-top text-center">
        <p className="text-muted mb-0 small fw-light">
          ALEXIS STUDIO &copy; 2026
        </p>
      </footer>
    </div>
  );
}

export default App;
