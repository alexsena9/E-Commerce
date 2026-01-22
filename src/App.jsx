import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import ProductCard from "./Components/ProductCard";
import Cart from "./Components/Cart";
import ProductDetail from "./Components/ProductDetail";
import Pagination from "./Components/Pagination";
import Footer from "./Components/Footer";
import WappFloat from "./Components/WappFloat";
import Filters from "./Components/Filters";
import { CheckCircle, ShoppingBag } from "lucide-react";
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
  const [precioMax, setPrecioMax] = useState(1500);
  const [busqueda, setBusqueda] = useState("");
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [compraExitosa, setCompraExitosa] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    localStorage.setItem("alexis_studio_cart", JSON.stringify(carrito));
  }, [carrito]);

  const productosFiltrados = productos.filter((p) => {
    const cumpleBusqueda = p.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    const cumpleCategoria =
      categoriaActiva === "Todos" || p.categoria === categoriaActiva;
    const cumplePrecio = p.precio <= precioMax;
    return cumpleBusqueda && cumpleCategoria && cumplePrecio;
  });

  const totalPaginas = Math.ceil(productosFiltrados.length / 12) || 1;
  const productosVisibles = productosFiltrados.slice(
    (paginaActual - 1) * 12,
    paginaActual * 12,
  );

  const agregarAlCarrito = (p) => {
    setCarrito([...carrito, p]);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

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
  }, [categoriaActiva, busqueda, precioMax]);

  if (compraExitosa) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light px-3">
        <div
          className="bg-white p-5 text-center shadow-lg rounded-5 animate-fade-up"
          style={{ maxWidth: "450px" }}
        >
          <div className="mb-4 text-success d-flex justify-content-center">
            <CheckCircle size={80} strokeWidth={1.5} />
          </div>
          <h2 className="fw-black mb-3">¡PEDIDO RECIBIDO!</h2>
          <p className="text-muted mb-4 fw-medium">
            Gracias por elegir Alexis Studio. Recibirás un mensaje de WhatsApp.
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
        productosSugeridos={productosFiltrados.slice(0, 5)}
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

      <main className="flex-grow-1" style={{ marginTop: "110px" }}>
        <header className="py-5 text-center bg-white border-bottom border-light">
          <div className="container">
            <h1
              className="fw-black display-4 mb-2"
              style={{ letterSpacing: "-3px" }}
            >
              ALEXIS<span className="fw-light text-muted">STUDIO</span>
            </h1>
            <p className="text-muted fw-bold small tracking-widest text-uppercase">
              Exclusive Tech Collection
            </p>
          </div>
        </header>

        <Filters
          categorias={[
            "Audio",
            "Wearables",
            "Fotografía",
            "Gaming",
            "Computación",
            "Telefonía",
          ]}
          categoriaActiva={categoriaActiva}
          setCategoria={setCategoriaActiva}
          precioMax={precioMax}
          setPrecioMax={setPrecioMax}
          totalResultados={productosFiltrados.length}
        />

        <div className="container mt-5">
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 pb-5">
            {productosVisibles.map((p, index) => (
              <div
                key={p.id}
                className="product-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard
                  producto={p}
                  onAgregar={agregarAlCarrito}
                  onVerDetalle={setProductoSeleccionado}
                />
              </div>
            ))}
          </div>
          <Pagination
            paginaActual={paginaActual}
            totalPaginas={totalPaginas}
            setPaginaActual={setPaginaActual}
          />
        </div>
      </main>

      {showToast && (
        <div
          className="position-fixed bottom-0 start-50 translate-middle-x mb-5"
          style={{ zIndex: 3000 }}
        >
          <div className="bg-dark text-white px-4 py-3 rounded-pill shadow-lg animate-fade-up d-flex align-items-center gap-3">
            <ShoppingBag size={18} className="text-primary" />
            <span className="small fw-bold tracking-wider">
              PRODUCTO AÑADIDO
            </span>
          </div>
        </div>
      )}

      <Footer />
      <WappFloat />
    </div>
  );
}

export default App;
