// src/components/Formulario.jsx

import React, { useState, useEffect } from "react";
import data from "../data/data"; // Importa los datos desde el archivo data.js

const Formulario = ({ onGrupoChange, onElementoChange }) => {
  const [grupos, setGrupos] = useState([]);
  const [elementos, setElementos] = useState([]);
  const [selectedGrupo, setSelectedGrupo] = useState("");
  const [selectedElemento, setSelectedElemento] = useState("");

  useEffect(() => {
    // Obtener los grupos únicos desde los datos
    const uniqueGrupos = [...new Set(data.map(item => item["SECTOR"]))];
    setGrupos(uniqueGrupos);
  }, []);

  // Actualizar los elementos cuando se selecciona un grupo
  useEffect(() => {
    if (selectedGrupo) {
      const filteredElements = data
        .filter(item => item["SECTOR"] === selectedGrupo)
        .map(item => item["FICHA"]);
      setElementos(filteredElements);
    } else {
      setElementos([]); // Limpiar los elementos si no hay grupo seleccionado
    }
  }, [selectedGrupo]);

  const handleGrupoChange = (e) => {
    const newGrupo = e.target.value;
    setSelectedGrupo(newGrupo);
    setSelectedElemento(""); // Resetear el selector de elementos cuando cambia el grupo
    onGrupoChange && onGrupoChange(newGrupo); // Emitir evento al padre si se pasa la función
  };

  const handleElementoChange = (e) => {
    const newElemento = e.target.value;
    setSelectedElemento(newElemento);
    onElementoChange && onElementoChange(newElemento); // Emitir evento al padre si se pasa la función
  };

  return (
    <>
      <div>
      <p className="pageHeader">Actuación</p>
      <label>
          Sector:
          <select value={selectedGrupo}
            className="roleSelectDiv"
            onChange={handleGrupoChange}>
            <option value="">Selecciona un grupo</option>
            {grupos.map((grupo, index) => (
              <option key={index} value={grupo}>
                {grupo}
              </option>
            ))}
          </select>
        </label>
      </div>
      <br />
      <div>
        <label>
          Elemento:
          <select value={selectedElemento}
            className="roleSelectDiv"
            onChange={handleElementoChange} disabled={!selectedGrupo}>
            <option value="">Selecciona un elemento</option>
            {elementos.map((elemento, index) => (
              <option key={index} value={elemento}>
                {elemento}
              </option>
            ))}
          </select>
        </label>
      </div>
    </>
  );
};

export default Formulario;
