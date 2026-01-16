import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import { productos } from "./productos";

function App() {
  const [carrito, setCarrito] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");
  const productosPorPagina = 12;

  const productosSugeridos = productos.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const productosFiltrados = productosSugeridos.filter(
    (p) => categoriaActiva === "Todos" || p.categoria === categoriaActiva
  );

  const ultimoIndice = paginaActual * productosPorPagina;
  const primerIndice = ultimoIndice - productosPorPagina;
  const productosVisibles = productosFiltrados.slice(
    primerIndice,
    ultimoIndice
  );
  const totalPaginas = Math.ceil(
    productosFiltrados.length / productosPorPagina
  );
  const numerosPagina = [...Array(totalPaginas).keys()].map((n) => n + 1);

  const categorias = ["Todos", ...new Set(productos.map((p) => p.categoria))];

  const agregarAlCarrito = (producto) => setCarrito([...carrito, producto]);
  const eliminarDelCarrito = (index) =>
    setCarrito(carrito.filter((_, i) => i !== index));

  useEffect(() => {
    setPaginaActual(1);
  }, [categoriaActiva, busqueda]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [paginaActual]);

  return (
    <div className="min-vh-100 bg-white">
      <Navbar
        cuentaCarrito={carrito.length}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        productosSugeridos={productosSugeridos}
        onAgregar={agregarAlCarrito}
      />

      <Cart items={carrito} onRemove={eliminarDelCarrito} />

      <main className="container pt-5 mt-5">
        <header className="py-5 text-center">
          <h1 className="fw-black text-dark display-5 tracking-tighter">
            ALEXIS STUDIO
          </h1>
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaActiva(cat)}
                className={`btn rounded-pill px-4 py-2 small fw-bold transition-all ${
                  categoriaActiva === cat
                    ? "btn-dark"
                    : "btn-light text-muted border-0"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </header>

        {productosVisibles.length > 0 ? (
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 pb-5">
            {productosVisibles.map((p) => (
              <ProductCard
                key={p.id}
                producto={p}
                onAgregar={agregarAlCarrito}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-5">
            <p className="text-muted">No hay resultados para tu búsqueda.</p>
          </div>
        )}

        {totalPaginas > 1 && (
          <nav className="d-flex justify-content-center pb-5 mt-4">
            <ul className="pagination align-items-center gap-2">
              {paginaActual > 1 && (
                <li className="page-item">
                  <button
                    className="btn btn-link text-muted fw-bold text-decoration-none"
                    onClick={() => setPaginaActual(1)}
                  >
                    INICIO
                  </button>
                </li>
              )}
              {numerosPagina
                .slice(
                  Math.max(0, paginaActual - 3),
                  Math.min(totalPaginas, paginaActual + 2)
                )
                .map((num) => (
                  <li key={num} className="page-item">
                    <button
                      className={`btn rounded-circle fw-bold mx-1 ${
                        paginaActual === num
                          ? "bg-dark text-white"
                          : "text-muted border"
                      }`}
                      style={{ width: "40px", height: "40px" }}
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
        )}
      </main>
    </div>
  );
}

export default App;
