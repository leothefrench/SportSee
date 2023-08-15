import Sidebar from '../components/sidebar/Sidebar'
import './error.scss'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
    <Sidebar />
    <div className='error404'>
        <h1 className='error404__title'>404</h1>
        <h2 className='error404__subtitle'>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to='/' className='error404__link'>Retourner sur la page d'accueil</Link>
    </div>
    </>
  )
}
export default Error
