import './energie.keyData.scss'
// import { useParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { getUserInformation } from '../../../api/call';

const EnergieKeyData = ({icon, infoEnergie, text}) => {

  // const { id } = useParams()
  // const [keyData, setKeyData] = useState([])

  // useEffect(() => {
  //   getUserInformation(id)
  //     .then((data) => {
  //       setKeyData(data);
  //     })
  //     .catch((error) => {
  //       console.log('An error occurred:', error);
  //     }); 
  // }, [id]);

  // if(!keyData || keyData.length === 0) {
  //   return <div>Aucun utilisateur trouvé</div>
  // }

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
