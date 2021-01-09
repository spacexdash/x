// import {getAllLaunches, getPastLaunches, getUpcomingLaunches, getNextLaunches, getLatestLaunches} from './service/SpaceXApi';
// const promises = [
//   getAllLaunches(), getPastLaunches(), getUpcomingLaunches(), getNextLaunches(), getLatestLaunches()
// ];
// Promise.all(promises).then((response) => console.log(response));
import { HashRouter as Router } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <div className="App">
      <Router>{routes}</Router>
    </div>
  );
}

export default App;
