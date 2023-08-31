import './kpi.scss'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useParams } from 'react-router-dom';
import {getUserInformation} from '../../../api/call'
import { useState, useEffect } from 'react';

export const KeyPerformanceIndice = () => {

  const { id } = useParams()
  const [score, setScore] = useState([])

  useEffect(() => {
    getUserInformation(id)
    .then((data) => {
      setScore(data)
    })
    .catch((error) => {
      console.log('An error occurred:', error);
    });
  }, [id]);

  if(!score || score.length === 0) {
    return <div>Aucun utilisateur trouvé</div>
  }

  return (
    <div className='container-keyPerformanceIndice'>
      <h3 className='container-keyPerformanceIndice__title-score'>Score</h3>
      <ResponsiveContainer width='100%' height='100%'>
        <PieChart>
          <Pie
            dataKey='value'
            isAnimationActive={true}
            data={score}
            outerRadius={85}
            innerRadius={75}
            cornerRadius={10}
          >
            {score.map((ele, index) => 
            index === 0 ? (<Cell key={`cell-${index}`} fill='#ff0000' />) :
                          (<Cell key={`cell-${ele}`} fill='#fbfbfb' />)
            )}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className='container-keyPerformanceIndice__score-container'>
        <span className='container-keyPerformanceIndice__score-container__score'>{score[0].value *100}% <br />
        </span>
        <span className='container-keyPerformanceIndice__score-container__text'>de votre </span><br/>
        <span className='container-keyPerformanceIndice__score-container__text'>objectif</span>
      </div>
    </div>
  );
};
