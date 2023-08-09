import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import Error from '../../pages/Error'
import UserTrackingPerformance from '../../pages/UserTrackingPerformance'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/user/:id' element={<UserTrackingPerformance />} />
      <Route path='/error' element={<Error />} />
    </Routes>
  )
}

export default Router;
