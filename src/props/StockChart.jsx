import React from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import DataGenerator from './DataGenerator'; // Asegúrate de que la ruta sea correcta

const StockChart = () => {
  // Función para generar los ticks del eje X para dos años
  const generateTicks = () => {
    const ticks = [];
    for (let year = 2022; year <= 2023; year++) { // Cambia los años según tus datos
      for (let month = 1; month <= 12; month++) {
        // Formato de la fecha en YYYY-MM-DD
        ticks.push(`${year}-${month < 10 ? '0' + month : month}-01`);
      }
    }
    return ticks;
  };

  // Función para formatear las etiquetas del eje X
  const formatXAxis = (tickItem) => {
    const date = new Date(tickItem);
    const month = date.getMonth() + 1; // Obtener el número del mes (0-11)
    const year = date.getFullYear(); // Obtener el año

    // Mostrar el año solo en enero y el número del mes para los otros meses
    return month === 1 ? year : `${month}`;
  };

  return (
    <DataGenerator>
      {(data) => (
        <div>
          {/* Gráfico combinado con un eje X compartido */}
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              {/* Eje X compartido con ticks personalizados */}
              <XAxis dataKey="date" ticks={generateTicks()} tickFormatter={formatXAxis} />
              {/* Segundo gráfico: Volumen con escala ajustada */}
              <YAxis yAxisId="right" orientation="right" stroke="darkblue" domain={[0, 'dataMax * 1.25']} />
              <Bar yAxisId="right" dataKey="kWh" fill="darkblue" />
              {/* Primer gráfico: Precio del IBEX */}
              <YAxis yAxisId="left" orientation="left" stroke="green" />
              <Tooltip />
              <Legend />
              {/* Aumentamos el grosor de la línea aquí */}
              <Line 
                yAxisId="left" 
                type="monotone" 
                dataKey='c€/kWh' 
                stroke="green" 
                dot={false} 
                strokeWidth={11}  // Aquí ajustamos el grosor de la línea
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      )}
    </DataGenerator>
  );
};

export default StockChart;
