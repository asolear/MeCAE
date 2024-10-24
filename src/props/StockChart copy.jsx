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
        label: 'c€/kWh',
        data: [],
        borderColor: 'green',
        backgroundColor: 'lightgrey',
        borderWidth: 8, // Duplicar grosor de la línea

        yAxisID: 'y1',
        fill: false,
      },
      {
        type: 'bar',
        label: 'kWh',
        data: [],
        borderColor: 'darkblue',
        backgroundColor: 'lightgrey',
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
            label: 'c€/kWh',
            data: unitCostDataArray,
            borderColor: 'green',
            backgroundColor: 'lightgrey',
            yAxisID: 'y1',
            fill: false,
          },
          {
            type: 'bar',
            label: 'kWh',
            data: quantityDataArray,
            borderColor: 'darkblue',
            backgroundColor: 'darkblue',
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
              text: 'c€/kWh',
              color: 'green', // Color del título del eje Y
            },
            ticks: {
              color: 'green', // Color de las etiquetas del eje Y
            },
            grid: {
              color: 'lightgrey', // Color de las líneas del eje Y
            },
          },
          y2: {
            beginAtZero: true,
            position: 'right',
            title: {
              display: true,
              text: 'kWh',
              color: 'darkblue', // Color del título del eje Y derecho
            },
            ticks: {
              color: 'darkblue', // Color de las etiquetas del eje Y derecho
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
      <div style={{ width: '100%', height: '300px' }}>
        <Line data={chartData} options={lineOptions} />
      </div>
    </div>
  );
};

export default ValueInput;
