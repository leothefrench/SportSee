import './radarPerformance.scss'
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';
// import { USER_PERFORMANCE } from '../../mock/data'
import { getUserPerformance } from '../../../api/call'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const RadarPerformance = () => {

  const { id } = useParams()
  const [radarData, setRadarData] = useState([])

  useEffect(() => {
    getUserPerformance(id)
      .then((data) => {
        setRadarData(data);
      })
      .catch((error) => {
        console.log('An error occurred:', error);
      });
  }, [id]);

  if(!radarData || radarData.length === 0) {
    return <div>Aucun utilisateur trouvé</div>
  }

  return (
    <div className="container-radar">
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart outerRadius={80} data={radarData}>
        <PolarGrid gridType='polygon' radialLines={false} />
        <PolarAngleAxis className='custom-axis' dataKey="kind"  tick={{ fill: "white", fontSize: 12 }} />
        <Radar dataKey="value" stroke="#000" fill="rgba(255, 1, 1, 0.70)" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default RadarPerformance 