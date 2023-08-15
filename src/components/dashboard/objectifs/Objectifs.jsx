import './objectifs.scss'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { USER_AVERAGE_SESSIONS } from '../../mock/data'
import { useParams } from 'react-router-dom';

const Objectifs = () => {

  const { userId } = useParams()
  const data = USER_AVERAGE_SESSIONS.find((el) => el.id == userId)
  console.log(data);

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <LineChart data={data} width={300} height={100}>
        <Line />
      </LineChart>
    </ResponsiveContainer>
  )
}
export default Objectifs
