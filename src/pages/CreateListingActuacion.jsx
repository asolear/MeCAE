import React, { useState, useEffect } from "react";
import data from "../data/data"; // Importa los datos desde el archivo data.js
import { Box, Typography, FormControl, InputLabel, Select, MenuItem, TextField } from "@mui/material";

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
        holacaracola: 33,
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
        <Box sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
                Actuación
            </Typography>

            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Tipo</InputLabel>
                <Select value={tipo} onChange={handleTipoChange}>
                    <MenuItem value="Estándar">Estándar</MenuItem>
                    <MenuItem value="Singular">Singular</MenuItem>
                </Select>
            </FormControl>

            {tipo === "Estándar" && (
                <>
                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <InputLabel>Sector</InputLabel>
                        <Select value={selectedSector} onChange={handleSectorChange}>
                            {sectores.sort().map((sector, index) => (
                                <MenuItem key={index} value={sector}>
                                    {sector}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl fullWidth sx={{ mb: 2 }} disabled={!selectedSector}>
                        <InputLabel>Ficha</InputLabel>
                        <Select value={selectedFicha} onChange={handleFichaChange}>
                            {fichas.sort().map((ficha, index) => (
                                <MenuItem key={index} value={ficha}>
                                    {ficha}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </>
            )}

            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Estado</InputLabel>
                <Select value={estado} onChange={handleEstadoChange}>
                    <MenuItem value="prevista">Prevista</MenuItem>
                    <MenuItem value="realizada">Realizada</MenuItem>
                </Select>
            </FormControl>

            <TextField
                fullWidth
                label="Ahorro de energía (kWh)"
                type="number"
                id="ahorroEnergia"
                value={formData.ahorroEnergia}
                onChange={handleInputChange}
                min="0"
                required
                sx={{ mb: 2 }}
            />

            <TextField
                fullWidth
                label="Contraprestación (€/kWh)"
                type="number"
                id="contraprestacion"
                value={formData.contraprestacion}
                onChange={handleInputChange}
                min="0"
                max="200"
                step="1"
                required
                sx={{ mb: 2 }}
            />

            <Typography variant="body1">
                Total: {ahorroTotal.toFixed(2)} €
            </Typography>
        </Box>
    );
};

export default CreateListingActuacion;
