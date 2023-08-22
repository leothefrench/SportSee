import './radarPerformance.scss'
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';
import { USER_PERFORMANCE } from '../../mock/data'


const RadarPerformance = () => {
  const radarData = USER_PERFORMANCE[0].data.map(item => ({
    kind: USER_PERFORMANCE[0].kind[item.kind],
    value: item.value
  }));

  return (
    <div className="container-radar">
    <ResponsiveContainer width={258} height={263}>
      {/* Graphique Radar - outerRadius pour le rayon du cercle qui contient le radar & data -> les données que l'on fournit */}
      <RadarChart outerRadius={80} data={radarData}>
        {/*  Grille de fond */}
        <PolarGrid />
        {/* Place les kinds cardio,energy, etc.. autour du cercle contenant le radar */}
        <PolarAngleAxis dataKey="kind" / >
        <Radar dataKey="value" stroke="#000" fill="rgba(255, 1, 1, 0.70)" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
    </div>

  );
};

export default RadarPerformance