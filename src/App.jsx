import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import Pagination from "./components/Pagination";
import { productos } from "./productos";

function App() {
  const [carrito, setCarrito] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const productosPorPagina = 12;

  const productosSugeridos = productos.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const productosFiltrados = productosSugeridos.filter(
    (p) => categoriaActiva === "Todos" || p.categoria === categoriaActiva
  );

  const totalPaginas = Math.ceil(
    productosFiltrados.length / productosPorPagina
  );
  const productosVisibles = productosFiltrados.slice(
    (paginaActual - 1) * productosPorPagina,
    paginaActual * productosPorPagina
  );

  const agregarAlCarrito = (producto) => setCarrito([...carrito, producto]);
  const eliminarDelCarrito = (index) =>
    setCarrito(carrito.filter((_, i) => i !== index));

  const manejarSeleccionBusqueda = (p) => {
    setProductoSeleccionado(p);
    setBusqueda("");
  };

  useEffect(() => {
    setPaginaActual(1);
  }, [categoriaActiva, busqueda]);

  return (
    <div className="min-vh-100 bg-white">
      <Navbar
        cuentaCarrito={carrito.length}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        productosSugeridos={productosSugeridos}
        onSeleccionarSugerencia={manejarSeleccionBusqueda}
      />

      <Cart items={carrito} onRemove={eliminarDelCarrito} />

      {productoSeleccionado && (
        <ProductDetail
          producto={productoSeleccionado}
          onClose={() => setProductoSeleccionado(null)}
          onAgregar={agregarAlCarrito}
        />
      )}

      <main className="container pt-5 mt-5">
        <header className="py-5 text-center">
          <h1 className="fw-black text-dark display-5">ALEXIS STUDIO</h1>
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
            {[
              "Todos",
              "Audio",
              "Wearables",
              "Fotografía",
              "Gaming",
              "Computación",
            ].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaActiva(cat)}
                className={`btn rounded-pill px-4 py-2 small fw-bold ${
                  categoriaActiva === cat ? "btn-dark" : "btn-light"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </header>

        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 pb-5">
          {productosVisibles.map((p) => (
            <ProductCard
              key={p.id}
              producto={p}
              onAgregar={agregarAlCarrito}
              onVerDetalle={(prod) => setProductoSeleccionado(prod)}
            />
          ))}
        </div>

        <Pagination
          paginaActual={paginaActual}
          totalPaginas={totalPaginas}
          setPaginaActual={setPaginaActual}
        />
      </main>
    </div>
  );
}

export default App;
