import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { Timestamp } from 'firebase/firestore';

const ValueInput = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        type: 'line',
        label: 'Media Ponderada de Contraprestación',
        data: [],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        yAxisID: 'y1',
        fill: false,
      },
      {
        type: 'bar',
        label: 'Acumulado Diario de Ahorro de Energía',
        data: [],
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        yAxisID: 'y2',
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

      const minUnitCost = Math.min(...unitCostDataArray);
      const maxUnitCost = Math.max(...unitCostDataArray);

      setChartData({
        labels: labels,
        datasets: [
          {
            type: 'line',
            label: 'Media Ponderada de Contraprestación',
            data: unitCostDataArray,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            yAxisID: 'y1',
            fill: false,
          },
          {
            type: 'bar',
            label: 'Acumulado Diario de Ahorro de Energía',
            data: quantityDataArray,
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.5)',
            yAxisID: 'y2',
          },
        ],
      });

      setLineOptions({
        scales: {
          y1: {
            beginAtZero: false,
            min: minUnitCost,
            max: maxUnitCost,
            position: 'left',
            title: {
              display: true,
              text: 'Media Ponderada de Contraprestación',
              color: 'rgba(75, 192, 192, 1)', // Color del título del eje Y
            },
            ticks: {
              color: 'rgba(75, 192, 192, 1)', // Color de las etiquetas del eje Y
            },
            grid: {
              color: 'rgba(75, 192, 192, 0.2)', // Color de las líneas del eje Y
            },
          },
          y2: {
            beginAtZero: true,
            position: 'right',
            title: {
              display: true,
              text: 'Acumulado Diario de Ahorro de Energía',
              color: 'rgba(153, 102, 255, 1)', // Color del título del eje Y derecho
            },
            ticks: {
              color: 'rgba(153, 102, 255, 1)', // Color de las etiquetas del eje Y derecho
            },
            grid: {
              drawOnChartArea: false, // Desactiva las líneas de grid del eje derecho
            },
          },
        },
        maintainAspectRatio: false,
      });
    };

    fetchData();
  }, []);

  const [lineOptions, setLineOptions] = useState({
    scales: {
      y1: {
        beginAtZero: true,
      },
      y2: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
  });

  return (
    <div>
      <h2>Gráfica con Media Ponderada y Acumulado Diario</h2>
      <div style={{ width: '100%', height: '300px' }}>
        <Line data={chartData} options={lineOptions} />
      </div>
    </div>
  );
};

export default ValueInput;
