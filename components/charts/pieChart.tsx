import React from 'react'
import { PieChart, Pie, Cell, Tooltip } from 'recharts'

interface GraphData {
  Month: string
  Outcome?: number
  Income?: number
}

interface PieChartComponentProps {
  data: GraphData[]
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const PieChartComponent: React.FC<PieChartComponentProps> = ({ data }) => {
  return (
    <div style={{ alignContent: 'center' }}>
      <PieChart width={400} height={270}>
        <Pie
          data={data}
          cx={150}
          cy={100}
          labelLine={true}
          outerRadius={80}
          fill="#8884d8"
          nameKey="Month"
          dataKey="Outcome"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  )
}

export default PieChartComponent
