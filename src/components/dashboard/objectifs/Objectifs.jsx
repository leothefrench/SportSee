import './objectifs.scss'
import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip, ReferenceArea } from 'recharts';
import { USER_AVERAGE_SESSIONS } from '../../mock/data'
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Objectifs = () => {

  const { userId } = useParams()
  const userData = USER_AVERAGE_SESSIONS.find(el => el.id == userId) 

  const [tooltipActive, setTooltipActive] = useState(false) // Etat du Tooltip actif ou non - là false au début
  const [referenceAreaData, setReferenceAreaData] = useState(null);

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

  const handleTooltip = (e) => {
    console.log("Mouse move event:", e);

    if (e && e.activeTooltipIndex !== -1) {
      const dataIndex = e.activeTooltipIndex; // Récupére l'index du point sous le curseur
      // affiche l'index
      console.log(dataIndex);

      setReferenceAreaData({ index: dataIndex });
      setTooltipActive(true);
    } else {
      console.log("Tooltip is not active.");
      setTooltipActive(false);
    }
  };

  return (
    <div className="container-line-graph">
      <h3 className="container-line-graph__title">Durée moyenne des sessions</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={dataDay}
          margin={{top: 5, right: 5, left: 5, bottom: 16}} 
          strokeWidth={1}
          onMouseEnter={(e) => handleTooltip(e)}
          onMouseLeave={() => setTooltipActive(false)}
        >    
        <XAxis
          dataKey='day' 
          type='category' 
          padding={{ left: 15, right: 15}}  
          tickLine={false} 
          stroke='red'
          tick={{ fontSize: 12, stroke: "white", opacity: 0.8}}
        />
        {tooltipActive && 
          <ReferenceArea
            x1={referenceAreaData.index}
            x2={referenceAreaData.index + 1}
            fill="yellow" 
            fillOpacity={0.3}
            className="custom-reference-area"
          />
        }         
        <Tooltip cursor={false} content={({ active, payload }) => {
          // console.log('Tooltip active');
          if (active && payload && payload.length) {
              const session = payload[0].payload;

            return (
              // <div className="custom-tooltip">
              <p className="custom-tooltip__minutes">{`${session.sessionLength} minutes`}</p>
              // </div>
              );
            }
              return null;
          }}
        />
        <Line type='monotone' dataKey='sessionLength' strokeWidth={2} connectNulls={true} dot={false} stroke="rgba(255, 255, 255, 0.7)"/ >
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Objectifs
