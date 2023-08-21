import './objectifs.scss'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import { USER_AVERAGE_SESSIONS } from '../../mock/data'
import { useParams } from 'react-router-dom';

const Objectifs = () => {

  const { userId } = useParams()
  const userData = USER_AVERAGE_SESSIONS.find(el => el.id == userId)

  const dataDay = userData.sessions.map((session) => {

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
      <ResponsiveContainer width="100%" height="75%">
        <LineChart
          data={dataDay}
          margin={{top: 5, right: 5, left: 5, bottom: 5 }} 
          strokeWidth={1}
        >
          {/* Axes */}
          <XAxis
            dataKey='day' 
            type='category' 
            padding={{ left: 5, right: 5 }}  
            tickLine={false} 
            stroke='red'
            tick={{ fontSize: 12, stroke: "white", opacity: 0.8}}
          />
          <YAxis />
          {/* Infobulle */}
          <Tooltip />
          <Line type='monotone' dataKey='sessionLength' strokeWidth={2} connectNulls={true} dot={false} stroke="rgba(255, 255, 255, 0.7)"/ >
        </LineChart>
      </ResponsiveContainer>
    </div>

  )
}

export default Objectifs

