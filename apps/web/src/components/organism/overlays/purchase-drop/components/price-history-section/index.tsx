import { Line } from 'react-chartjs-2'
import { BiLineChart } from 'react-icons/bi'
import Accordion from '../accordion'
import * as S from './styles'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

export const options = {
  responsive: true,
  plugins: {
    tootip: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      bodyColor: '#000',
      titleFont: "'Poppins', sans-serif",
      bodyFont: "'Poppins', sans-serif",
    },
    legend: {
      position: 'bottom' as const,
    },
    title: {
      display: false,
    },
  },
}

const transactions = [
  {
    date: '2021-05-01',
    price: 24.9,
    sales: 4,
  },
  {
    date: '2021-05-01',
    price: 18.9,
    sales: 4,
  },
  {
    date: '2021-05-01',
    price: 24.9,
    sales: 4,
  },
]

export default function PriceHistorySection() {
  const labels = transactions.map((transaction) => transaction.date)
  const data = {
    labels,
    datasets: [
      {
        fill: false,
        label: 'Price variation',
        data: transactions.map((item) => item.price),
        borderColor: 'rgb(113, 80, 244)',
        backgroundColor: 'rgba(126, 96, 255, 0.3)',
      },
    ],
  }
  return (
    <S.LastPurchasersContainer>
      <Accordion title="Price History" icon={<BiLineChart />}>
        <Line options={options} data={data} />;
      </Accordion>
    </S.LastPurchasersContainer>
  )
}
