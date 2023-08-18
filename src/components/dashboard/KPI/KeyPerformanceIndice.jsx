import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { USER_MAIN_DATA } from '../../mock/data'
import { useParams } from 'react-router-dom';

const COLORS = ['#8884d8', '#82ca9d'];

export const KeyPerformanceIndice = () => {
  const { userId } = useParams(); // Récupère le paramètre d'URL

  // Trouve l'utilisateur correspondant à l'ID fourni dans les paramètres d'URL
  const selectedUser = USER_MAIN_DATA.find(user => user.d == userId);
  console.log(selectedUser)

  if (!selectedUser) {
    return <div>Utilisateur non trouvé</div>;
  }

  const { firstName, lastName } = selectedUser.userInfos;
  const { todayScore } = selectedUser;

  const data = [
    { name: `${firstName} ${lastName}`, value: todayScore },
    { name: 'Autres', value: 1 - todayScore } // Calcul du score restant
  ];

  return (
    <PieChart width={400} height={250}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={80}
        innerRadius={60}
        fill="#8884d8"
        label={(entry) => `${entry.name}: ${entry.value.toFixed(2)}`}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};