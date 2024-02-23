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

const COLORS = [
  '#2196F3',
  '#FFC107',
  '#0edd1e',
  '#9C27B0',
  '#ff001e',
  '#202b39',
]

const PieChartComponent: React.FC<PieChartComponentProps> = ({ data }) => {
  const total = data.reduce((prev, curr) => prev + (curr.Outcome || 0), 0)

  return (
    <div
      style={{
        alignContent: 'center',
        background: '#dcdfe9',
        borderRadius: 30,
        borderWidth: 0.5,
        borderColor: 'gray',
      }}
    >
      <PieChart width={400} height={200}>
        <Pie
          data={data}
          cx={150}
          cy={100}
          labelLine={false}
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
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          padding: 20,
        }}
      >
        {data.map((entry, index) => {
          const percent = (((entry.Outcome || 0) / total) * 100).toFixed(2)
          return (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '10px',
                width: '33%',
                borderRadius: '5px',
              }}
            >
              <div
                style={{
                  width: '25px',
                  height: '20px',
                  backgroundColor: COLORS[index % COLORS.length],
                  marginLeft: '5px',
                  marginRight: '5px',
                }}
              />
              <div>{`${entry.Month}: ${percent}%`}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PieChartComponent
