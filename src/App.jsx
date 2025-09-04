import React, { useState } from "react";

const cursos = [
  { id: 1, titulo: "React Básico", duracion: "4 semanas", nivel: "Principiante", cupos: 3, imagen: "https://s44783.pcdn.co/wp-content/uploads/sites/6/2024/08/programming-background-with-person-working-with-codes-computer-1024x683.jpg.optimal.jpg" },
  { id: 2, titulo: "JavaScript Avanzado", duracion: "6 semanas", nivel: "Avanzado", cupos: 0, imagen: "https://concepto.de/wp-content/uploads/2020/08/Programacion-informatica-scaled-e1724960033513-2048x1024.jpg" },
];

const noticias = [
  //{ id: 1, titulo: "Nuevo Curso de Python", resumen: "Aprende Python desde cero con ejercicios prácticos.", imagen: "https://co.pinterest.com/pin/796574252862200340/" },
];

const Header = () => (
  <header className="bg-blue-900 text-white p-6 flex flex-col md:flex-row items-center justify-between">
    <div className="flex items-center space-x-4">
      <h1 className="text-3xl font-bold">Universidad Libre</h1>
    </div>
    <nav className="space-x-4 mt-4 md:mt-0">
      <a href="#cursos" className="hover:underline">Cursos</a>
      <a href="#noticias" className="hover:underline">Noticias</a>
      <a href="#contacto" className="hover:underline">Contacto</a>
    </nav>
  </header>
);

const Curso = ({ curso }) => (
  <article className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col">
    <img src={curso.imagen} alt={curso.titulo} className="h-48 w-full object-cover"/>
    <div className="p-4 flex flex-col flex-grow">
      <h2 className="text-xl font-bold mb-2">{curso.titulo}</h2>
      <p className="mb-1">Duración: {curso.duracion}</p>
      <p className="mb-4">Nivel: {curso.nivel}</p>
      <button
        className={`mt-auto py-2 px-4 rounded ${
          curso.cupos > 0 ? "bg-green-500 hover:bg-green-600" : "bg-gray-400 cursor-not-allowed"
        } text-white`}
        disabled={curso.cupos === 0}
      >
        {curso.cupos > 0 ? "Inscribirse" : "No hay cupos"}
      </button>
    </div>
  </article>
);

const Noticia = ({ noticia }) => (
  <article className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
    <img src={noticia.imagen} alt={noticia.titulo} className="h-32 w-full object-cover"/>
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{noticia.titulo}</h3>
      <p>{noticia.resumen}</p>
    </div>
  </article>
);

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias ${nombre}, recibimos tu correo: ${email}`);
  };
  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 m-4 flex flex-col max-w-md mx-auto">
      <label htmlFor="nombre" className="mb-1 font-semibold">Nombre:</label>
      <input
        id="nombre"
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="border rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <label htmlFor="email" className="mb-1 font-semibold">Email:</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
        Enviar
      </button>
    </form>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="p-6">
        {/* Sección Hero */}
        <section className="relative mb-12">
          <img src="https://s44783.pcdn.co/wp-content/uploads/sites/6/2024/08/programming-background-with-person-working-with-codes-computer-1024x683.jpg.optimal.jpg" alt="Hero" className="w-full h-64 object-cover rounded-lg shadow-md"/>
          <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl text-white font-bold shadow-lg text-center px-4">
            Bienvenido a la Plataforma Educativa
          </h2>
        </section>

        {/* Cursos */}
        <section id="cursos">
          <h2 className="text-2xl font-bold mb-4">Cursos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cursos.map((c) => (
              <Curso key={c.id} curso={c} />
            ))}
          </div>
        </section>

        {/* Noticias */}
        <section id="noticias" className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Últimas Noticias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {noticias.map((n) => (
              <Noticia key={n.id} noticia={n} />
            ))}
          </div>
        </section>

        {/* Formulario */}
        <section id="contacto" className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Contacto</h2>
          <Formulario />
        </section>
      </main>

      <footer className="bg-blue-900 text-white p-6 mt-12 text-center">
        <p>&copy; Rebeca PC .</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">Twitter</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
