import './objectifs.scss'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { USER_AVERAGE_SESSIONS } from '../../mock/data'
import { useParams } from 'react-router-dom';

const Objectifs = () => {

  const { userId } = useParams()
  const data = USER_AVERAGE_SESSIONS.find((el) => el.id == userId)
  console.log(data.sessions);

  const dataDay = data.sessions.map((data) => {

    switch(data.day) {
      case 1:
        return {...data, day: 'L'}
      case 2: 
        return {...data, day: 'M'}
      case 3: 
        return {...data, day: 'M'}
      case 4: 
        return {...data, day: 'J'}
      case 5: 
        return {...data, day: 'V'}
      case 6: 
        return {...data, day: 'S'}
      case 7: 
        return {...data, day: 'D'}
    }
  })

  return (
    <div className="container-line-graph">
      <h3 className="container-line-graph__title">Durée moyenne des sessions</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={400}
          height={200}
          data={dataDay}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }} 
          strokeWidth={1}
        >
          {/* Axes */}
          <XAxis
            dataKey='day' 
            orientation='bottom' 
            type='category' 
            padding={{ left: 10, right: 10 }}  
            tickLine={true} 
            ticks={{fontSize: 12, stroke:'#fff'}}/>
          <YAxis />
          <Tooltip />
          <Line type='monotone' dataKey={dataDay} stroke='#ffffff' strokeWidth={2} dot={false}/ >
        </LineChart>
      </ResponsiveContainer>
    </div>

  )
}
export default Objectifs
