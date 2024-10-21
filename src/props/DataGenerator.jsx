// DataGenerator.js
import React from 'react';

// Componente para generar datos de IBEX y volumen
const DataGenerator = ({ children }) => {
  const generateData = () => {
    const data = [];
    const startDate = new Date('2024-9-21');
    const endDate = new Date('2024-10-21');

    for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
      // Generar valores aleatorios
      const ibexValue = Math.floor(Math.random() * (110 - 90 + 1)) + 90; // Valores entre 8000 y 9500
      const volumeValue = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000; // Volumen entre 1000 y 5000
      
      // Formatear la fecha en 'YYYY-MM-DD'
      const formattedDate = date.toISOString().split('T')[0];
      
      data.push({
        date: formattedDate,
        'c€/kWh': ibexValue,
        kWh: volumeValue,
      });
    }
    
    return data;
  };

  const data = generateData();

  return children(data);
};

export default DataGenerator;
