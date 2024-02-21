import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

interface GraphData {
  Month: string
  Outcome: number
  Income: number
}

interface AreaChartComponentProps {
  data: GraphData[]
  strokeColor: string
  fillColor: string
}

const AreaChartComponent: React.FC<AreaChartComponentProps> = ({
  data,
  strokeColor,
  fillColor,
}) => {
  return (
    <AreaChart
      width={470}
      height={300}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Month" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="Income"
        stroke={strokeColor}
        fill={fillColor}
      />
      <Area
        type="monotone"
        dataKey="Outcome"
        stroke={strokeColor}
        fill={fillColor}
      />
    </AreaChart>
  )
}

export default AreaChartComponent
