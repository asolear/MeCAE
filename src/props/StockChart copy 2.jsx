import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { Timestamp } from 'firebase/firestore';

const ValueInput = () => {
  const [unitCostData, setUnitCostData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Media Ponderada de Contraprestación',
        data: [],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
      },
    ],
  });

  const [quantityData, setQuantityData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Acumulado Diario de Ahorro de Energía',
        data: [],
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const querySnapshot = await getDocs(collection(db, 'listings'));

      const dailyData = {};
      let accumulatedCost = 0;
      let accumulatedQuantity = 0;

      querySnapshot.forEach((doc) => {
        const docData = doc.data();
        const date = docData.timestamp instanceof Timestamp 
          ? docData.timestamp.toDate().toLocaleDateString()
          : new Date(docData.timestamp).toLocaleDateString();

        if (!dailyData[date]) {
          dailyData[date] = { totalCost: 0, totalQuantity: 0, accumulatedQuantity: 0 };
        }

        const ahorroEnergia = Number(docData.ahorroEnergia);
        const contraprestacion = Number(docData.contraprestacion);

        dailyData[date].totalCost += contraprestacion * ahorroEnergia;
        dailyData[date].totalQuantity += ahorroEnergia;

        accumulatedCost += contraprestacion * ahorroEnergia;
        accumulatedQuantity += ahorroEnergia;

        dailyData[date].accumulatedQuantity = ahorroEnergia;
      });

      const sortedDates = Object.keys(dailyData).sort((a, b) => new Date(a) - new Date(b));

      const labels = [];
      const unitCostDataArray = [];
      const quantityDataArray = [];
      
      let cumulativeCost = 0;
      let cumulativeQuantity = 0;

      sortedDates.forEach((date) => {
        const { totalCost, totalQuantity, accumulatedQuantity } = dailyData[date];
        labels.push(date);

        cumulativeCost += totalCost;
        cumulativeQuantity += totalQuantity;

        const weightedAverage = cumulativeQuantity ? (cumulativeCost / cumulativeQuantity) : 0;
        unitCostDataArray.push(weightedAverage);

        quantityDataArray.push(accumulatedQuantity);
      });

      // Calcular el mínimo y máximo de la serie para la media ponderada
      const minUnitCost = Math.min(...unitCostDataArray);
      const maxUnitCost = Math.max(...unitCostDataArray);

      setUnitCostData({
        labels: labels,
        datasets: [
          {
            label: 'Media Ponderada de Contraprestación',
            data: unitCostDataArray,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: false,
          },
        ],
      });

      setQuantityData({
        labels: labels,
        datasets: [
          {
            label: 'Acumulado Diario de Ahorro de Energía',
            data: quantityDataArray,
            backgroundColor: 'rgba(153, 102, 255, 0.5)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
          },
        ],
      });

      // Configuración del eje Y con los límites mínimos y máximos
      setLineOptions({
        scales: {
          y: {
            min: minUnitCost,
            max: maxUnitCost,
          },
        },
      });
    };

    fetchData();
  }, []);

  // Configuración para el gráfico de línea
  const [lineOptions, setLineOptions] = useState({
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false, // Permitir el ajuste del tamaño personalizado
  });

  // Configuración para el gráfico de barras
  const barOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false, // Permitir el ajuste del tamaño personalizado
  };

  return (
    <div>
      <h2>Media Ponderada de Contraprestación por Día</h2>
      <div style={{ width: '100%', height: '200px' }}>
        <Line data={unitCostData} options={lineOptions} />
      </div>

      <h2>Acumulado Diario de Ahorro de Energía</h2>
      <div style={{ width: '100%', height: '200px' }}>
        <Bar data={quantityData} options={barOptions} />
      </div>
    </div>
  );
};

export default ValueInput;
