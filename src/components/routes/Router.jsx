import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import User from '../../pages/User'
import Error from '../../pages/Error'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/user/:id' element={<User />} />
      <Route path='./error' element={<Error />} />
    </Routes>
  )
}

export default Router;
