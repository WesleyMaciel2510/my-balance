import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

interface Data {
  Month: string
  [key: string]: string | number
}

const InvestmentLineChart = () => {
  const data: Data[] = [
    {
      Month: 'Jan',
      stocks: 4521.35,
      bonds: 810.2,
      crypto: 1578.33,
      realEstate: 1056.79,
      etfs: 1258.04,
    },
    {
      Month: 'Feb',
      stocks: -1023.8,
      bonds: 370.46,
      crypto: 3125.91,
      realEstate: 507.35,
      etfs: 731.1,
    },
    {
      Month: 'Mar',
      stocks: 2189.52,
      bonds: 1025.7,
      crypto: -589.24,
      realEstate: 1532.69,
      etfs: 1854.29,
    },
    {
      Month: 'Apr',
      stocks: 516.08,
      bonds: 690.58,
      crypto: 2108.75,
      realEstate: 832.02,
      etfs: 1023.56,
    },
    {
      Month: 'May',
      stocks: -876.59,
      bonds: 420.19,
      crypto: -1098.46,
      realEstate: 1205.88,
      etfs: 697.42,
    },
    {
      Month: 'Jun',
      stocks: 1203.7,
      bonds: 715.37,
      crypto: 1854.2,
      realEstate: 950.3,
      etfs: 1416.8,
    },
  ]

  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Month" />
      <YAxis />
      <Tooltip />
      <Legend />
      {['stocks', 'bonds', 'crypto', 'realEstate', 'etfs'].map((key) => (
        <Line
          type="linear"
          dataKey={key}
          stroke={
            key === 'stocks'
              ? '#2441e3'
              : key === 'bonds'
                ? '#e32441'
                : key === 'crypto'
                  ? '#e3a124'
                  : key === 'realEstate'
                    ? '#24e3a1'
                    : '#a124e3'
          }
          activeDot={{ r: 8 }}
          key={key}
        />
      ))}
    </LineChart>
  )
}

export default InvestmentLineChart
