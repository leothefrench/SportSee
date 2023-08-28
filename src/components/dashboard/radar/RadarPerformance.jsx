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
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart outerRadius={80} data={radarData}>
        <PolarGrid gridType='polygon' radialLines={false} />
        <PolarAngleAxis dataKey="kind"  tick={{ fill: "white", fontSize: 12 }} />
        <Radar dataKey="value" stroke="#000" fill="rgba(255, 1, 1, 0.70)" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default RadarPerformance