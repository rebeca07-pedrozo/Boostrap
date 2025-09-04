import { useState } from "react";

function Dashboard() {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(false);

  const cargarDatos = () => {
    setCargando(true);
    setDatos(null);
    setTimeout(() => {
      setDatos({ nombre: "Ana", correo: "ana@mail.com", rol: "Admin" });
      setCargando(false);
    }, 2000);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "30px",
        maxWidth: "400px",
        margin: "auto",
        textAlign: "center",
        background: "#f0f2f5",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
      }}
    >
      <h1 style={{ color: "#333" }}>Mini Dashboard</h1>
      <button
        onClick={cargarDatos}
        style={{
          padding: "10px 20px",
          margin: "10px 0",
          borderRadius: "5px",
          border: "none",
          background: "#3498db",
          color: "#fff",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        Cargar Datos
      </button>

      <div style={{ marginTop: "20px" }}>
        {!datos && !cargando && (
          <p style={{ color: "#888", fontStyle: "italic" }}>No hay datos cargados</p>
        )}
        {cargando && <p style={{ color: "#f39c12", fontWeight: "bold" }}>Cargando datos...</p>}
        {datos && (
          <div
            style={{
              border: "2px solid #3498db",
              borderRadius: "8px",
              padding: "15px",
              background: "#fff",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
            }}
          >
            <p>
              <strong>Nombre:</strong> {datos.nombre}
            </p>
            <p>
              <strong>Correo:</strong> {datos.correo}
            </p>
            <p>
              <strong>Rol:</strong> {datos.rol}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
