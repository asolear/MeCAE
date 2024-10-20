import React, { useState, useEffect } from "react";
import data from "../data/data"; // Importa los datos desde el archivo data.js

const CreateListingActuacion = ({ onFormDataChange }) => {
  const [tipo, setTipo] = useState("Estándar");
  const [sectores, setSectores] = useState([]);
  const [fichas, setFichas] = useState([]);
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedFicha, setSelectedFicha] = useState("");
  const [estado, setEstado] = useState("realizada");
  const [formData, setFormData] = useState({
    titulo: '',
    ahorroEnergia: 220,
    contraprestacion: 100, // Valor por defecto (ejemplo 0.10 €/kWh)
    holacaracola:33,
  });

  useEffect(() => {
    const uniqueSectors = [...new Set(data.map(item => item["SECTOR"]))];
    setSectores(uniqueSectors);
    if (uniqueSectors.length > 0) {
      setSelectedSector(uniqueSectors[0]);
    }
  }, []);

  useEffect(() => {
    if (selectedSector) {
      const filteredElements = data
        .filter(item => item["SECTOR"] === selectedSector)
        .map(item => item["FICHA"]);
      setFichas(filteredElements);
      if (filteredElements.length > 0) {
        setSelectedFicha(filteredElements[0]);
      }
    } else {
      setFichas([]);
    }
  }, [selectedSector]);

  useEffect(() => {
    if (selectedFicha) {
      const fichaParts = selectedFicha.split(":");
      const titulo = fichaParts.length > 1 ? fichaParts[1].trim() : selectedFicha;
      setFormData(prevState => ({
        ...prevState,
        titulo: titulo
      }));
      // Notifica el cambio de los datos del formulario al componente principal
      onFormDataChange({ ...formData, titulo });
    }
  }, [selectedFicha]);

  const handleTipoChange = (e) => {
    const newTipo = e.target.value;
    setTipo(newTipo);
    onFormDataChange({ ...formData, tipo: newTipo });
    if (newTipo !== "Estándar") {
      setSelectedSector("");
      setSelectedFicha("");
    } else if (sectores.length > 0) {
      setSelectedSector(sectores[0]);
    }
  };

  const handleSectorChange = (e) => {
    const newSector = e.target.value;
    setSelectedSector(newSector);
    setSelectedFicha("");
    onFormDataChange({ ...formData, selectedSector: newSector });
  };

  const handleFichaChange = (e) => {
    const newFicha = e.target.value;
    setSelectedFicha(newFicha);
    onFormDataChange({ ...formData, selectedFicha: newFicha });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
    onFormDataChange({ ...formData, [id]: value });
  };

  const handleEstadoChange = (e) => {
    const newEstado = e.target.value;
    setEstado(newEstado);
    onFormDataChange({ ...formData, estado: newEstado });
  };

  const ahorroTotal = formData.ahorroEnergia * formData.contraprestacion;

  return (
    <>
      <p className="pageHeader">Actuación</p>
      {/* <div>
        <label className='formLabel'>
          Tipo:
          <select value={tipo} className="formInputName" onChange={handleTipoChange}>
            <option value="Estándar">Estándar</option>
            <option value="Singular">Singular</option>
          </select>
        </label>
      </div>
      <br /> */}

      {tipo === "Estándar" && (
        <>
          <div>
            <label className='formLabel'>
              Sector:
              <select
                value={selectedSector}
                className="formInputName"
                onChange={handleSectorChange}>
                {sectores.sort().map((sector, index) => (
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
              <select
                value={selectedFicha}
                className="formInputName"
                onChange={handleFichaChange} disabled={!selectedSector}>
                {fichas.sort().map((ficha, index) => (
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

      {/* <label className='formLabel'>Título descriptivo de la actuación</label>
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
      <br /> */}

      <div>
        <label className='formLabel'>
          Estado:
          <select value={estado} className="formInputName" onChange={handleEstadoChange}>
            <option value="prevista">Prevista</option>
            <option value="realizada">Realizada</option>
          </select>
        </label>
      </div>
      <br />

      <div>
        <label className='formLabel'>
          Ahorro de energía (kWh):
          <input
            type="number"
            id="ahorroEnergia"
            value={formData.ahorroEnergia}
            onChange={handleInputChange}
            min="0"
            className="formInputName"
            required
          />
        </label>
      </div>
      <br />

      <div>
        <label className='formLabel'>
          Contraprestación (€/kWh):
          <input
            type="number"
            id="contraprestacion"
            value={formData.contraprestacion}
            onChange={handleInputChange}
            min="0"
            max="200"
            step="1"
            className="formInputName"
            required
          />
        </label>
        <p className="ahorroTotal" >Total: {ahorroTotal.toFixed(2)} €</p>
      </div>
      <br />
    </>
  );
};

export default CreateListingActuacion;
