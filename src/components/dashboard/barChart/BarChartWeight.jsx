import './barChartWeight.scss'
import { getData } from '../../mock/getData'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import iconWeight from '../../../assets/barChart-icons/Oval-poids-icon.svg'
import iconCaloriesBrulees from '../../../assets/barChart-icons/Oval-clories-brulees-icon.svg'

const BarChartWeight = () => {

const [data, setData] = useState([])
const {id} = useParams()

  useEffect(() => {
    const data = async () => {
      const req = await getData('USER_ACTIVITY', id)
      setData(req.data.sessions)
    }
    data()
  }, [id])

  return (
    <wrapper-barChart>
      <header>
        <h1>Activité quotidienne</h1>
        <Legend>
          <bar-column-information>
            <span>{ iconWeight }</span>
            <text>Poids (kg)</text>
          </bar-column-information>
          <bar-column-information>
            <span>{ iconCaloriesBrulees }</span>
            <text>Calories brûlées (kCal)</text>
          </bar-column-information>
        </Legend>
      </header>
      
      {/* <ResponsiveContainer width={250} > */}
        <BarChart width={500} height={300} data={data} margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}>
          <CartesianGrid strokeDasharray='1 1'/>
          <XAxis dataKey='day'/>
          <YAxis yAxisId='kilogram' dataKey='kilogram'/>
          <YAxis yAxisId='calories' dataKey='calories'/>
          <Bar yAxisId='kilogram' dataKey='kilogram' fill='#282D30' />
          <Bar yAxisId='calories' dataKey='calories' fill='#E60000'/>
        </BarChart>
      {/* </ResponsiveContainer> */}
    </wrapper-barChart>
  )
}
export default BarChartWeight