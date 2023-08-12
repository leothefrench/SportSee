import './user.scss'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getData } from '../components/mock/getData'
import SideBar from '../components/sidebar/Sidebar'
import HeaderDashboard from '../components/dashboard/headerDashboard/HeaderDashboard'
import EnergieKeyData from '../components/dashboard/energie/EnergieKeyData'
import caloriesIcon from '../assets/energie-icons/calories-icon.svg'
import proteinIcon from '../assets/energie-icons/protein-icon.svg'
import carbsIcon from '../assets/energie-icons/carbs-icon.svg'
import fatIcon from '../assets/energie-icons/fat-icon.svg'
import BarChartWeight from '../components/dashboard/barChart/BarChartWeight'

const User = () => {

  const [data, setData] = useState([])
  const {id} = useParams()
  
    useEffect(() => {
      const data = async () => {
        const req = await getData('USER_MAIN_DATA', id)
        if(!req) return alert('Error data')
        setData(req.data)
      }
      data() //I call the data function
    }, [id]) // Dependency array - the change that I follow in my case teh id of user

  return (
    <main className='main'>
      <SideBar />
      <div className='main__wrapper'>
        <HeaderDashboard className='main__wrapper__header' name={data?.userInfos?.firstName} />
        <section className='main__wrapper__section'>
          <BarChartWeight />
        </section>
        <aside>
          <EnergieKeyData 
          icon={caloriesIcon}
          infoEnergie={`${data?.keyData?.calorieCount/1000}kCal`}
          text='Calories'
          />
          <EnergieKeyData 
          icon={proteinIcon}
          infoEnergie={`${data?.keyData?.proteinCount}g`}
          text='Proteines'
          />
          <EnergieKeyData 
          icon={carbsIcon}
          infoEnergie={`${data?.keyData?.carbohydrateCount}g`}
          text='Glucides'
          />
          <EnergieKeyData 
          icon={fatIcon}
          infoEnergie={`${data?.keyData?.lipidCount}g`}
          text='Lipides'
          />
        </aside>
      </div>
    </main>
  )
}

export default User
