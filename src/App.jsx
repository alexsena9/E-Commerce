import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import { productos } from "./productos";

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);

    console.log(`¡${producto.nombre} añadido!`);
  };

  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = carrito.filter((_, i) => i !== index);
    setCarrito(nuevoCarrito);
  };

  return (
    <div className="min-vh-100 bg-white">
      <Navbar cuentaCarrito={carrito.length} />

      <Cart items={carrito} onRemove={eliminarDelCarrito} />

      <main className="container pt-5 mt-5">
        <header className="py-5 text-center">
          <h2 className="fw-light text-dark mb-0">Colección</h2>
          <h1 className="fw-black text-dark tracking-tighter">MINIMAL</h1>
        </header>

        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 pb-5">
          {productos.map((p) => (
            <ProductCard key={p.id} producto={p} onAgregar={agregarAlCarrito} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
