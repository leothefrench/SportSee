import './App.scss'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Router from './components/routes/Router'
import User from './pages/User'

function App() {

  return (
    <>
      <Header />
      {/* <main className='main'> */}
        {/* <Sidebar /> */}
        {/* <User /> */}
        <Router />
      {/* </main> */}
    </>

  )
}

export default App
