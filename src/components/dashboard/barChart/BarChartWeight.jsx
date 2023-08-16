import './barChartWeight.scss'
import { USER_ACTIVITY } from '../../mock/data'
import { useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import iconWeight from '../../../assets/barChart-icons/Oval-poids-icon.svg'
import iconCaloriesBrulees from '../../../assets/barChart-icons/Oval-clories-brulees-icon.svg'

const BarChartWeight = () => {

  const {userId} = useParams()
  const data = USER_ACTIVITY.find((user) => user.id == userId)
  
  if(!data) {
    return <div>Aucun utilisateur trouvé</div>
  }

  let dataSessions = data.sessions.map((el) => {
    return `${el.kilogram}`
  })

  console.log(dataSessions)

  for(let i =0; i < data.length; i++) {
    data[i].day = i +1;
  }

  return (
    <div>
      <div>
        <h1>Activité quotidienne</h1>
        <Legend>
          <div className='legend-poids'>
            <span>{iconWeight}</span>
            <span>Poids (kg)</span>
          </div>
          <div className='legend-calories'>
            <span>{iconCaloriesBrulees}</span>
            <span>Calories brûlées (kCal)</span>
          </div>
        </Legend>
      </div>
      <ResponsiveContainer height={200}>
        <BarChart data={data.sessions} barGap={8} barCategoryGap={1} >
          <CartesianGrid strokeDasharray='1 1' vertical={false} />
          <XAxis dataKey='day' tickLine={false} tick={{fontSize: 14}} dy={15} stroke='1 1' />
          <YAxis yAxisId='kilogram' dataKey='kilogram' type='number' domain={['dataMin - 2', 'dataMax + 1']} tickCount="4" axisLine={false} orientation="right" tickLine={false} tick={{fontSize: 14}} dx={15} />
          <YAxis yAxisId='calories' dataKey='calories' type='number' domain={['dataMin - 20', 'dataMax + 10']} hide={true}  />
          <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]}/>
          <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
export default BarChartWeight
