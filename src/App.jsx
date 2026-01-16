import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { productos } from "./productos";

function App() {
  return (
    <div className="min-vh-100 bg-black text-white">
      <Navbar />

      <main className="container pt-5 mt-5">
        <header className="py-5 text-start">
          <h1 className="display-3 fw-bold italic">
            NUEVA <span className="text-info">COLECCIÓN</span>
          </h1>
          <p className="lead text-secondary">
            Tecnología premium seleccionada para ti.
          </p>
        </header>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 pb-5">
          {productos.map((p) => (
            <ProductCard key={p.id} producto={p} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
