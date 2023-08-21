import './radarPerformance.scss'
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import { USER_PERFORMANCE } from '../../mock/data'

const RadarPerformance = () => {
  const radarData = USER_PERFORMANCE[0].data.map(item => ({
    kind: USER_PERFORMANCE[0].kind[item.kind],
    value: item.value
  }));

  return (
    // Responsive Conteneur pour l'adaptation au container parent
    <ResponsiveContainer width={258} height={263}>
      {/* Graphique Radar - outerRadius pour le rayon du cercle qui contient le radar & data -> les données que l'on fournit */}
      <RadarChart outerRadius={100} data={radarData}>
        {/*  Grille de fond */}
        <PolarGrid />
        {/* Place les kinds autour du cercle contenant le radar */}
        <PolarAngleAxis dataKey="kind" />
        {/* On dispose les performances à 30° avec une échelle de 0 à 250 */}
        <PolarRadiusAxis angle={30} domain={[0, 250]} />
        <Radar dataKey="value" stroke="#000" fill="rgba(255, 1, 1, 0.70)" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarPerformance