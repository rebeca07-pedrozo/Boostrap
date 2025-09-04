import { useState } from "react";

function ListaTareas() {
  const [tareas, setTareas] = useState([]);
  const [texto, setTexto] = useState("");

  function agregarTarea() {
    if (texto.trim() === "") return; 
    setTareas([...tareas, texto]);
    setTexto("");
  }

  function eliminarTarea(index) {
    setTareas(tareas.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <input
        type="text"
        placeholder="Escribe tu tarea"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button onClick={agregarTarea}>Agregar</button>
      <ul>
        {tareas.map((tarea, i) => (
          <li key={i}>
            {tarea} <button onClick={() => eliminarTarea(i)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;
