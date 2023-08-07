import logo from '../../assets/logo.svg'
import './header.scss'

const Header = () => {
  return (
    <header className='header'>
      <img src={ logo } alt="sport fee logo" className='header__logo' />
      <div className="header__navbar">
        <ul className='header__navbar__link'>
          <li className='header__navbar__link__item'>Accueil</li>
          <li className='header__navbar__link__item'>Profil</li>
          <li className='header__navbar__link__item'>Réglage</li>
          <li className='header__navbar__link__item'>Communauté</li>
        </ul>
      </div>
    </header>
  )
}
export default Header
