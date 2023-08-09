import './home.scss'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <h1 className='home__title'>Select your user</h1>
      <Link to='user/12' className='home__linkUser'>Karl</Link>
      <Link to='user/18' className='home__linkUser'>Cecilia</Link>
    </div>
  )
}

export default Home;
