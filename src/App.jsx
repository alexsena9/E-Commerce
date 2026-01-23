import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import ProductCard from "./Components/ProductCard";
import Cart from "./Components/Cart";
import ProductDetail from "./Components/ProductDetail";
import Pagination from "./Components/Pagination";
import Footer from "./Components/Footer";
import WappFloat from "./Components/WappFloat";
import Filters from "./Components/Filters";
import Testimonials from "./Components/Testimonials";
import Newsletter from "./Components/Newsletter";
import CountdownBanner from "./Components/CountdownBanner";
import { CheckCircle, X } from "lucide-react";
import { productos } from "./productos";

function App() {
  const [carrito, setCarrito] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [busqueda, setBusqueda] = useState("");
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");
  const [precioMax, setPrecioMax] = useState(6000);
  const [orden, setOrden] = useState("recomendados");
  const [paginaActual, setPaginaActual] = useState(1);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [compraExitosa, setCompraExitosa] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(carrito));
  }, [carrito]);

  useEffect(() => {
    setPaginaActual(1);
  }, [busqueda, categoriaActiva, precioMax, orden]);

  const productosFiltrados = productos
    .filter((p) => {
      const matchBusqueda = p.nombre
        .toLowerCase()
        .includes(busqueda.toLowerCase());
      const matchCat =
        categoriaActiva === "Todos" || p.categoria === categoriaActiva;
      const matchPrecio = p.precio <= precioMax;
      return matchBusqueda && matchCat && matchPrecio;
    })
    .sort((a, b) => {
      if (orden === "precio-asc") return a.precio - b.precio;
      if (orden === "precio-desc") return b.precio - a.precio;
      if (orden === "nombre-az") return a.nombre.localeCompare(b.nombre);
      return 0;
    });

  const productosVisibles = productosFiltrados.slice(
    (paginaActual - 1) * 8,
    paginaActual * 8,
  );

  if (compraExitosa) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light p-4">
        <div
          className="bg-white p-5 text-center shadow-lg rounded-5"
          style={{ maxWidth: "450px" }}
        >
          <CheckCircle size={80} className="text-success mb-4 mx-auto" />
          <h2 className="fw-black mb-3">PEDIDO CONFIRMADO</h2>
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
    <div className="bg-light min-vh-100">
      <Navbar
        cuentaCarrito={carrito.length}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        productos={productos}
        onVerDetalle={setProductoSeleccionado}
      />

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
        orden={orden}
        setOrden={setOrden}
        totalResultados={productosFiltrados.length}
      />

      <Cart
        items={carrito}
        onRemove={(index) => setCarrito(carrito.filter((_, i) => i !== index))}
        onFinalizar={() => {
          setCarrito([]);
          setCompraExitosa(true);
        }}
      />

      {productoSeleccionado && (
        <ProductDetail
          producto={productoSeleccionado}
          onClose={() => setProductoSeleccionado(null)}
          onAgregar={(p) => {
            setCarrito([...carrito, p]);
          }}
        />
      )}

      <main style={{ paddingTop: "110px" }}>
        <CountdownBanner onAction={() => setCategoriaActiva("Gaming")} />

        <header className="py-5 text-center bg-white border-bottom mb-5">
          <div className="container">
            <h1
              className="fw-black display-3 mb-0"
              style={{ letterSpacing: "-2px" }}
            >
              ALEXIS STUDIO
            </h1>
            <p className="text-muted fw-bold small text-uppercase tracking-widest">
              Premium Tech Store
            </p>
          </div>
        </header>

        <div className="container pb-5">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4">
            {productosVisibles.map((p) => (
              <div key={p.id} className="col">
                <ProductCard
                  producto={p}
                  onAgregar={(prod) => setCarrito([...carrito, prod])}
                  onVerDetalle={setProductoSeleccionado}
                />
              </div>
            ))}
          </div>

          {productosFiltrados.length === 0 && (
            <div className="text-center py-5">
              <X size={50} className="text-muted mb-3 mx-auto" />
              <h4 className="fw-bold">Sin resultados</h4>
              <button
                className="btn btn-dark rounded-pill mt-3 px-4"
                onClick={() => {
                  setBusqueda("");
                  setCategoriaActiva("Todos");
                }}
              >
                Reiniciar tienda
              </button>
            </div>
          )}

          <Pagination
            paginaActual={paginaActual}
            totalPaginas={Math.ceil(productosFiltrados.length / 8)}
            setPaginaActual={setPaginaActual}
          />
        </div>

        <Testimonials />
        <Newsletter />
      </main>

      <Footer />
      <WappFloat />
    </div>
  );
}

export default App;
