import Sidebar from '../components/sidebar/Sidebar'
import './error.scss'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <main className='main-error'>
      <Sidebar />
      <div className='main-error__error404'>
          <h1 className='main-error__error404__title'> Erreur 404</h1>
          <h2 className='main-error__error404__subtitle'>Oups! La page que vous demandez n'existe pas.</h2>
          <Link to='/' className='main-error__error404__link'>Retourner sur la page d'accueil</Link>
      </div>
    </main>
  )
}
export default Error
