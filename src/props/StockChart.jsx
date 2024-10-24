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
        borderWidth: 8,
        yAxisID: 'y1',
        fill: false,
      },
      {
        type: 'bar',
        label: 'kWh',
        data: [],
        borderColor: 'darkblue',
        backgroundColor: 'darkblue',
        yAxisID: 'y2',
      },
    ],
  });

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

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const querySnapshot = await getDocs(collection(db, 'listings'));

      const dailyData = {};

      querySnapshot.forEach((doc) => {
        const docData = doc.data();
        const date = docData.timestamp instanceof Timestamp 
          ? docData.timestamp.toDate().toLocaleDateString()
          : new Date(docData.timestamp).toLocaleDateString();

        if (!dailyData[date]) {
          dailyData[date] = { totalCost: 0, totalQuantity: 0 };
        }

        const ahorroEnergia = Number(docData.ahorroEnergia);
        const contraprestacion = Number(docData.contraprestacion);

        dailyData[date].totalCost += contraprestacion * ahorroEnergia;
        dailyData[date].totalQuantity += ahorroEnergia;
      });

      const sortedDates = Object.keys(dailyData).sort((a, b) => new Date(a) - new Date(b));

      const labels = [];
      const unitCostDataArray = [];
      const quantityDataArray = [];

      sortedDates.forEach((date) => {
        const { totalCost, totalQuantity } = dailyData[date];
        labels.push(date);

        // Calcular el costo unitario solo para el día en cuestión
        const dailyUnitCost = totalQuantity ? (totalCost / totalQuantity) : 0;
        unitCostDataArray.push(dailyUnitCost);

        quantityDataArray.push(totalQuantity);
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
              color: 'green',
            },
            ticks: {
              color: 'green',
            },
            grid: {
              color: 'lightgrey',
            },
          },
          y2: {
            beginAtZero: true,
            position: 'right',
            title: {
              display: true,
              text: 'kWh',
              color: 'darkblue',
            },
            ticks: {
              color: 'darkblue',
            },
            grid: {
              drawOnChartArea: false,
            },
          },
        },
        maintainAspectRatio: false,
      });
    };

    fetchData();
  }, []);

  return (
    <div>
      <div style={{ width: '100%', height: '300px' }}>
        <Line data={chartData} options={lineOptions} />
      </div>
    </div>
  );
};

export default ValueInput;
