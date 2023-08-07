import USER_MAIN_DATA from '../../mock/data'
import Header from './header/Header';

const Dashboard = () => {

  const {firstName} = USER_MAIN_DATA;

  return (
    <Header firstName={firstName} />
  )
}
export default Dashboard