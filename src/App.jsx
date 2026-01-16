import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import { Search } from "lucide-react";
import { productos } from "./productos";

function App() {
  const [carrito, setCarrito] = useState(() => {
    try {
      const saved = localStorage.getItem("alexis_studio_cart");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [paginaActual, setPaginaActual] = useState(1);
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [compraExitosa, setCompraExitosa] = useState(false);

  useEffect(() => {
    localStorage.setItem("alexis_studio_cart", JSON.stringify(carrito));
  }, [carrito]);

  const productosSugeridos = productos.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const productosFiltrados = productosSugeridos.filter(
    (p) => categoriaActiva === "Todos" || p.categoria === categoriaActiva
  );

  const totalPaginas = Math.ceil(productosFiltrados.length / 12) || 1;

  const productosVisibles = productosFiltrados.slice(
    (paginaActual - 1) * 12,
    paginaActual * 12
  );

  const agregarAlCarrito = (p) => setCarrito([...carrito, p]);
  const eliminarDelCarrito = (i) =>
    setCarrito(carrito.filter((_, idx) => idx !== i));

  const finalizarCompra = () => {
    setCompraExitosa(true);
    setCarrito([]);
    localStorage.removeItem("alexis_studio_cart");
  };

  useEffect(() => {
    setPaginaActual(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [categoriaActiva, busqueda]);

  if (compraExitosa) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
        <div
          className="bg-white p-5 text-center shadow-lg rounded-4 animate-fade-up"
          style={{ maxWidth: "450px" }}
        >
          <div className="mb-4 text-success">
            <Search size={60} strokeWidth={1} />
          </div>
          <h2 className="fw-bold mb-3">¡PEDIDO RECIBIDO!</h2>
          <p className="text-muted mb-4">
            Gracias por tu compra. Nos comunicaremos contigo a la brevedad.
          </p>
          <button
            className="btn btn-dark w-100 py-3 rounded-pill fw-bold"
            onClick={() => setCompraExitosa(false)}
          >
            VOLVER A LA TIENDA
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      <Navbar
        cuentaCarrito={carrito.length}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        productosSugeridos={productosSugeridos}
        onSeleccionarSugerencia={(p) => {
          setProductoSeleccionado(p);
          setBusqueda("");
        }}
      />

      <Cart
        items={carrito}
        onRemove={eliminarDelCarrito}
        onFinalizar={finalizarCompra}
      />

      {productoSeleccionado && (
        <ProductDetail
          producto={productoSeleccionado}
          onClose={() => setProductoSeleccionado(null)}
          onAgregar={agregarAlCarrito}
        />
      )}

      <main className="container pt-5 mt-5 flex-grow-1">
        <header className="py-5 text-center">
          <h1 className="fw-bold display-5" style={{ letterSpacing: "-2px" }}>
            ALEXIS<span className="fw-light text-muted">STUDIO</span>
          </h1>
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
                className={`btn rounded-pill px-4 py-2 small fw-bold shadow-sm border-0 ${
                  categoriaActiva === cat ? "btn-dark" : "bg-white text-muted"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </header>

        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 pb-5">
          {productosVisibles.length > 0 ? (
            productosVisibles.map((p) => (
              <ProductCard
                key={p.id}
                producto={p}
                onAgregar={agregarAlCarrito}
                onVerDetalle={setProductoSeleccionado}
              />
            ))
          ) : (
            <div className="col-12 text-center py-5 animate-fade-up">
              <div className="bg-white p-5 d-inline-block rounded-4 shadow-sm">
                <Search size={40} className="text-muted mb-3 opacity-30" />
                <h5 className="fw-bold">No hay coincidencias</h5>
                <p className="text-muted small mb-0">
                  Intenta con otros términos o categorías.
                </p>
              </div>
            </div>
          )}
        </div>

        <Pagination
          paginaActual={paginaActual}
          totalPaginas={totalPaginas}
          setPaginaActual={setPaginaActual}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
