import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import Error from '../../pages/Error'
import User from '../../pages/User'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/user/:id' element={<User />} />
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default Router;
