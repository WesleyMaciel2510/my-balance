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

interface ColumnGraphProps {
  data: GraphData[]
  IncomeColor: string
  OutcomeColor: string
}

const ColumnGraph: React.FC<ColumnGraphProps> = ({
  data,
  IncomeColor,
  OutcomeColor,
}) => {
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
      <Bar dataKey="Income" fill={IncomeColor} />
      <Bar dataKey="Outcome" fill={OutcomeColor} />
    </BarChart>
  )
}

export default ColumnGraph
