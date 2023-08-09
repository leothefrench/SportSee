import { BarChart, LineChart, RadarChart } from 'recharts'
import './user.scss'
import Header from '../components/header/Header'
import EnergieKeyData from '../components/dashboard/energie/EnergieKeyData'
import HeaderDashboard from '../components/dashboard/headerDashboard/HeaderDashboard'
import BarChartWeight from '../components/dashboard/barChart/BarChartWeight'

const UserTrackingPerformance = () => {
  return (
    <main className='main'>
      <wrapper className='main__wrapper'>
        <Header className='main__wrapper__header'/>
        <section className='main__wrapper__section'>
          {/* <BarChart className='main__wrapper__section__barChart'/>
          <LineChart className='main__wrapepr__section__lineChart'/>
          <RadarChart className='main__wrapper__section__radarChart'/>
          <KPI /> */}
        </section>
        <aside>
          <EnergieKeyData />
        </aside>
      </wrapper>
    </main>
  )
}
export default UserTrackingPerformance
