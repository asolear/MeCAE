import React, { useState, useEffect } from "react";
import data from "../data/data"; // Importa los datos desde el archivo data.js

const EditListingActuacion = ({ formData, onFormDataChange }) => {
  const [tipo, setTipo] = useState(formData.tipo || "Estándar");
  const [sectores, setSectores] = useState([]);
  const [fichas, setFichas] = useState([]);
  const [selectedSector, setSelectedSector] = useState(formData.selectedSector || "");
  const [selectedFicha, setSelectedFicha] = useState(formData.selectedFicha || "");
  const [estado, setEstado] = useState(formData.estado || "realizada");

  useEffect(() => {
    const uniqueSectors = [...new Set(data.map(item => item["SECTOR"]))];
    setSectores(uniqueSectors);
    if (uniqueSectors.length > 0 && !selectedSector) {
      setSelectedSector(uniqueSectors[0]);
    }
  }, [selectedSector]);

  useEffect(() => {
    if (selectedSector) {
      const filteredElements = data
        .filter(item => item["SECTOR"] === selectedSector)
        .map(item => item["FICHA"]);
      setFichas(filteredElements);
      if (filteredElements.length > 0 && !selectedFicha) {
        setSelectedFicha(filteredElements[0]);
      }
    } else {
      setFichas([]);
    }
  }, [selectedSector, selectedFicha]);

  useEffect(() => {
    if (selectedFicha) {
      const fichaParts = selectedFicha.split(":");
      const titulo = fichaParts.length > 1 ? fichaParts[1].trim() : selectedFicha;
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
      <p className="pageHeader">Editar Actuación</p>

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
        <p className="ahorroTotal">Total: {ahorroTotal.toFixed(2)} €</p>
      </div>
      <br />
    </>
  );
};

export default EditListingActuacion;
