import React, { useState, useEffect } from "react";
import data from "../data/data"; // Importa los datos desde el archivo data.js

const Formulario = ({ onSectorChange, onFichaChange }) => {
  const [tipo, setTipo] = useState("Estándar"); // Tipo inicial como "Estándar"
  const [sectores, setSectores] = useState([]);
  const [fichas, setFichas] = useState([]);
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedFicha, setSelectedFicha] = useState("");
  const [formData, setFormData] = useState({
    titulo: '',
  });

  useEffect(() => {
    // Obtener los sectores únicos desde los datos
    const uniqueSectors = [...new Set(data.map(item => item["SECTOR"]))];
    setSectores(uniqueSectors);
    // Seleccionar el primer sector automáticamente si hay sectores
    if (uniqueSectors.length > 0) {
      setSelectedSector(uniqueSectors[0]);
    }
  }, []);

  // Actualizar los fichas cuando se selecciona un sector
  useEffect(() => {
    if (selectedSector) {
      const filteredElements = data
        .filter(item => item["SECTOR"] === selectedSector)
        .map(item => item["FICHA"]);
      setFichas(filteredElements);
      // Seleccionar la primera ficha automáticamente si hay fichas
      if (filteredElements.length > 0) {
        setSelectedFicha(filteredElements[0]);
      }
    } else {
      setFichas([]); // Limpiar los fichas si no hay sector seleccionado
    }
  }, [selectedSector]);

  const handleTipoChange = (e) => {
    const newTipo = e.target.value;
    setTipo(newTipo);
    // Resetear selectores si se cambia de Estándar a Singular
    if (newTipo !== "Estándar") {
      setSelectedSector("");
      setSelectedFicha("");
    } else if (sectores.length > 0) {
      setSelectedSector(sectores[0]); // Restablecer al primer sector si vuelve a Estándar
    }
  };

  const handleSectorChange = (e) => {
    const newSector = e.target.value;
    setSelectedSector(newSector);
    setSelectedFicha(""); // Resetear el selector de fichas cuando cambia el sector
    onSectorChange && onSectorChange(newSector); // Emitir evento al padre si se pasa la función
  };

  const handleFichaChange = (e) => {
    const newFicha = e.target.value;
    setSelectedFicha(newFicha);
    onFichaChange && onFichaChange(newFicha); // Emitir evento al padre si se pasa la función
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  return (
    <>
      <p className="pageHeader">Actuación</p>
      <div>
        <label className='formLabel'>
          Tipo:
          <select value={tipo} className="roleSelectDiv" onChange={handleTipoChange}>
            <option value="Estándar">Estándar</option>
            <option value="Singular">Singular</option>
          </select>
        </label>
      </div>
      <br />

      {/* Mostrar los selectores de sector y ficha solo si es "Estándar" */}
      {tipo === "Estándar" && (
        <>
          <div>
            <label className='formLabel'>
              Sector:
              <select value={selectedSector}
                className="roleSelectDiv"
                onChange={handleSectorChange}>
                {sectores.map((sector, index) => (
                  <option key={index} value={sector}>
                    {sector}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <br />
          <div>
            <label className='formLabel'>
              Ficha:
              <select value={selectedFicha}
                className="roleSelectDiv"
                onChange={handleFichaChange} disabled={!selectedSector}>
                {fichas.map((ficha, index) => (
                  <option key={index} value={ficha}>
                    {ficha}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <br />
        </>
      )}

      <label className='formLabel'>Título descriptivo de la actuación</label>
      <input
        className='formInputName'
        type='text'
        id='titulo'
        value={formData.titulo}
        onChange={handleInputChange}
        maxLength='32'
        minLength='0'
        required
      />
    </>
  );
};

export default Formulario;
