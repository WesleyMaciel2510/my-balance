import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

interface GraphData {
  Month: string
  Outcome: number
  Income: number
}

interface BarChartComponentProps {
  data: GraphData[]
  IncomeColor: string
  OutcomeColor: string
}

const BarChartComponent: React.FC<BarChartComponentProps> = ({
  data,
  IncomeColor,
  OutcomeColor,
}) => {
  return (
    <BarChart
      width={470}
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
      <Bar dataKey="Income" fill={IncomeColor} />
      <Bar dataKey="Outcome" fill={OutcomeColor} />
    </BarChart>
  )
}

export default BarChartComponent
