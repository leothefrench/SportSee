import Sidebar from '../components/sidebar/Sidebar';
import './home.scss'
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <main className='home'>
      <Sidebar />
      <div className='home__user'>
        <h1 className='home__title'>Select your user</h1>
        <NavLink to='user/12' className='home__linkUser'>Karl</NavLink>
        <NavLink to='user/18' className='home__linkUser'>Cecilia</NavLink>
      </div>
    </main>
  )
}

export default Home;
