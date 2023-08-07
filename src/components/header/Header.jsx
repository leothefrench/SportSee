import logo from '../../assets/logo.svg'
import titleLogo from '../../assets/title-logo.svg'
import './header.scss'

const Header = () => {
  return (
    <header className='header'>
      <div className="header__logo">
        <img src={ logo } alt="sport fee logo" className='header__logo__image' />
        <img src={ titleLogo } alt="titre du logo" className='header__logo__title-logo'/> 
      </div>
      <div className="header__navbar">
        <ul className='header__navbar__link'>
          <li className='header__navbar__link__nav-item-list'>Accueil</li>
          <li className='header__navbar__link__nav-item-list'>Profil</li>
          <li className='header__navbar__link__nav-item-list'>Réglage</li>
          <li className='header__navbar__link__nav-item-list'>Communauté</li>
        </ul>
      </div>
    </header>
  )
}
export default Header