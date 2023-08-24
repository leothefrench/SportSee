import './barChartWeight.scss'
// import { USER_ACTIVITY } from '../../mock/data'
import { useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ToolType } from './ToolType';
import iconWeight from '../../../assets/barChart-icons/Oval-poids-icon.svg'
import iconCaloriesBrulees from '../../../assets/barChart-icons/Oval-clories-brulees-icon.svg'
import { useState, useEffect } from 'react';
import { getUserAverageSessions } from '../../../api/call';

const BarChartWeight = () => {

  const {userId} = useParams()
  // const data = USER_ACTIVITY.find((user) => user.id === userId)

  const [sessionData, setSessionData] = useState([])

  useEffect(() => {
    getUserAverageSessions(userId, 'getUserActivity')
    .then((data) => setSessionData(data))
    .catch((error) => console.log('An error occurred:', error));
  }, [userId]);

  if(!sessionData || sessionData.length === 0) {
    return <div>No data find for session</div>
  } 
  
  // if(!data) {
  //   return <div>Aucun utilisateur trouvé</div>
  // }

  // const dataSessions = data.sessions.map((el, index) => {
    
  //   return {
  //     day: index + 1,
  //     kilogram: el.kilogram,
  //     calories: el.calories
  //   }
  // }) 

  return (
    <div className='legend'>
      <div className='legend__barChart'>
        <h1 className='legend__barChart__title'>Activité quotidienne</h1>
        <div className='legend__barChart__icons'>
          <div className='legend__barChart__icons__bullet'>
            <img src={iconWeight} alt='weight' />
            <span className='legend__barChart__icons__bullet__text'>Poids (kg)</span>
          </div>
          <div className='legend__barChart__icons__bullet'>
            <img src={iconCaloriesBrulees} alt='calories' />
            <span className='legend__barChart__icons__bullet__text'>Calories brûlées (kCal)</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer height={320}>
        <BarChart data={sessionData} barGap={8} barCategoryGap={1} >
          <CartesianGrid strokeDasharray='1 1' vertical={false} />
          <XAxis dataKey='day' tickLine={false} tick={{fontSize: 14}} dy={15} stroke='1 1' />
          <YAxis yAxisId='kilogram' dataKey='kilogram' type='number' domain={['dataMin - 2', 'dataMax + 1']} tickCount="4" axisLine={false} orientation="right" tickLine={false} tick={{fontSize: 14}} dx={15} />
          <YAxis yAxisId='calories' dataKey='calories' type='number' domain={['dataMin - 20', 'dataMax + 10']} hide={true}  />
          <Tooltip content={<ToolType />} />
          <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]}/>
          <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChartWeight
