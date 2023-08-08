import './App.scss'
import { BrowserRouter } from 'react-router-dom'
import HeaderDashboard from './components/dashboard/headerDashboard/HeaderDashboard'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      {/* <UserTrackingPerformance /> */}
    </BrowserRouter>
  )
}

export default App
