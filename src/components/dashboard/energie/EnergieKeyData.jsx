import { getData } from "../../mock/getData"
import caloriesIcon from '../../../assets/energie-icons/calories-icon.svg'
import proteinIcon from '../../../assets/energie-icons/protein-icon.svg'
import carbsIcon from '../../../assets/energie-icons/carbs-icon.svg'
import fatIcon from '../../../assets/energie-icons/fat-icon.svg'
import { useParams } from "react-router-dom"
import './energie.keyData.scss'

const EnergieKeyData = () => {

  const {id} = useParams()
  // const user = housings.find(housing => housing.id === id)
  const user12 = getData(12, 'getUserMainData')
  console.log(user12)

  // if(housing === undefined ) {
  //   return <Error404 />
  // }

  return (
    <div>
      <img src={caloriesIcon} alt="Calories" className="energie-icon"/>
      <div>
          <span className="number">{ key.da} Kcal</span>
          <span>Calories</span>
      </div>
    </div>

  )
}
export default EnergieKeyData;
