import './sidebar.scss'
import yogaLogo from '../../assets/yoga-icon.svg'
import swimmingLogo from '../../assets/swimming-icon.svg'
import cycloLogo from '../../assets/cyclo-icon.svg'
import weightliftingLogo from '../../assets/weightlifting-icon.svg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar__logo">
            <img src={yogaLogo} alt="Yoga" />
            <img src={swimmingLogo} alt="Swimming" />
            <img src={cycloLogo} alt="Cyclo" />
            <img src={weightliftingLogo} alt="Weightlifting" />            
        </div>
        <p className='sidebar__copyright'>Copiryght, SportSee 2020</p>
    </div> 
  )
}
export default Sidebar