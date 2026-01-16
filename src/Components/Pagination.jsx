import React from "react";

const Pagination = ({ paginaActual, totalPaginas, setPaginaActual }) => {
  if (totalPaginas <= 1) return null;

  return (
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

        {[...Array(totalPaginas).keys()]
          .map((n) => n + 1)
          .slice(
            Math.max(0, paginaActual - 3),
            Math.min(totalPaginas, paginaActual + 2)
          )
          .map((num) => (
            <li key={num} className="page-item">
              <button
                className={`btn rounded-circle fw-bold mx-1 shadow-sm transition-all`}
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
  );
};

export default Pagination;
