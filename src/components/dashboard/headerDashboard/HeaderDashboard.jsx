import './headerDashboard.scss'

const HeaderDashboard = ({name}) => {
  return (
    <header className='headerDashboard'>
        <h1 className='headerDashboard__title'>Bonjour {name}</h1>
        <span className='headerDashboard__felicitation'>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
    </header>
  )
}
export default HeaderDashboard