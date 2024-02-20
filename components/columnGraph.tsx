import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

const ColumnGraph = () => {
  const data = [
    { Month: 'Jan', Outcome: 4500, Income: 2800 },
    { Month: 'Feb', Outcome: 3200, Income: 1500 },
    { Month: 'Mar', Outcome: 2100, Income: 8100 },
    { Month: 'Apr', Outcome: 2300, Income: 7600 },
    { Month: 'May', Outcome: 1800, Income: 7200 },
    { Month: 'Jun', Outcome: 2000, Income: 6800 },
  ]
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Income" fill="#8884d8" />
      <Bar dataKey="Outcome" fill="#82ca9d" />
    </BarChart>
  )
}

export default ColumnGraph
