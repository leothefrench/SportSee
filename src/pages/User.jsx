import './user.scss'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {getAllDataUser} from '../api/call'
// import { USER_MAIN_DATA } from '../components/mock/data'
import SideBar from '../components/sidebar/Sidebar'
import HeaderDashboard from '../components/dashboard/headerDashboard/HeaderDashboard'
import EnergieKeyData from '../components/dashboard/energie/EnergieKeyData'
import caloriesIcon from '../assets/energie-icons/calories-icon.svg'
import proteinIcon from '../assets/energie-icons/protein-icon.svg'
import carbsIcon from '../assets/energie-icons/carbs-icon.svg'
import fatIcon from '../assets/energie-icons/fat-icon.svg'
import BarChartWeight from '../components/dashboard/barChart/BarChartWeight'
import Objectifs from '../components/dashboard/objectifs/Objectifs'
import RadarPerformance from '../components/dashboard/radar/RadarPerformance'
import { KeyPerformanceIndice } from '../components/dashboard/KPI/KeyPerformanceIndice'

const User = () => {

  const {id} = useParams()
  // const data = USER_MAIN_DATA.find((el) => el.id == id)
  const [data, setData] = useState(null)

 useEffect(() => {
  getAllDataUser(id)
    .then((data) => {
      setData(data);
      // console.log(data)
    })
    .catch((error) => {
      console.log('An error occurred:', error);
    }); 
}, [id]);

if(!data || data.length === 0) {
  return <div>Aucun utilisateur trouvé</div>
}

  return (
    <main className='main'>
      <SideBar />
      <div className='main__wrapper'>
        <HeaderDashboard className='main__wrapper__header' name={data.userInfos.firstName} /> 
        <div className="main__wrapper__graph-container">
          <section className='main__wrapper__section'>
            <BarChartWeight />
            <div className='main__wrapper__section__trois-cubes'>
              <Objectifs />
              <RadarPerformance />
              <KeyPerformanceIndice />
            </div>
          </section>
          <aside className='main__wrapper__graph-container__aside'>
            <EnergieKeyData 
            icon={caloriesIcon}
            infoEnergie={`${data.keyData.calorieCount/1000}kCal`}
            text='Calories'
            /> 
            <EnergieKeyData 
            icon={proteinIcon}
            infoEnergie={`${data.keyData.proteinCount}g`}
            text='Proteines'
            />
            <EnergieKeyData 
            icon={carbsIcon}
            infoEnergie={`${data.keyData.carbohydrateCount}g`}
            text='Glucides'
            />
            <EnergieKeyData 
            icon={fatIcon}
            infoEnergie={`${data.keyData.lipidCount}g`}
            text='Lipides'
            />
          </aside>
        </div>
      </div>
    </main>
  )
}

export default User
