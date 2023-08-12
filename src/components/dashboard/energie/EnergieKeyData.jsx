import './energie.keyData.scss'

const EnergieKeyData = ({icon, infoEnergie, text}) => {

  return (
    <div>
      <img src={icon} alt="Calories" className="energie-icon"/>
      <div>
          <span className="number-energie">{infoEnergie}</span>
          <span>{text}</span>
      </div>
    </div>
  )
}
export default EnergieKeyData;
