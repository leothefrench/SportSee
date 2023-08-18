import './energie.keyData.scss'

const EnergieKeyData = ({icon, infoEnergie, text}) => {

  return (
    <div className='keyData'>
      <img src={icon} alt="Calories" className="keyData__icon"/>
      <div className='keyData__energie'>
          <span className="keyData__energie__number-energie">{infoEnergie}</span>
          <span className="keyData__energie__text-energie">{text}</span>
      </div>
    </div>
  )
}
export default EnergieKeyData;
