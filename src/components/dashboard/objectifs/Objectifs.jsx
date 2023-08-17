import './objectifs.scss'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { USER_AVERAGE_SESSIONS } from '../../mock/data'
import { useParams } from 'react-router-dom';

const Objectifs = () => {

  const { userId } = useParams()
  const data = USER_AVERAGE_SESSIONS.find((el) => el.id == userId)
  console.log(data.sessions);

  const dataDay = data.sessions.map((session) => {

    switch(session.day) {
      case 1:
        return {...session, day: 'L'}
      case 2: 
        return {...session, day: 'M'}
      case 3: 
        return {...session, day: 'M'}
      case 4: 
        return {...session, day: 'J'}
      case 5: 
        return {...session, day: 'V'}
      case 6: 
        return {...session, day: 'S'}
      case 7: 
        return {...session, day: 'D'}
      default:
        return session
    }

  })

  return (
    <div className="container-line-graph">
      <h3 className="container-line-graph__title">Durée moyenne des sessions</h3>
      <ResponsiveContainer width="100%" height={256}>
        <LineChart
          data={dataDay}
          margin={{top: 5, right: 30, left: 20, bottom: 5 }} 
          strokeWidth={1}
        >
          {/* Axes */}
          <XAxis
            dataKey='day' 
            type='category' 
            padding={{ left: 5, right: 5, top: 5}}  
            orientation="bottom"
            tickLine={true} 
          />
          <YAxis />
          <Tooltip />
          <Line type='natural' dataKey='sessionsLength' stroke='red' strokeWidth={2} dot={true}/ >
        </LineChart>
      </ResponsiveContainer>
    </div>

  )
}
export default Objectifs
