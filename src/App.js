import './App.css';
import HomePage from './pages/HomePage'
import DestinationPage from './pages/DestinationPage'
import ActivityPage from './pages/ActivityPage'
import TopCountries from './components/TopCountries'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


function App() {


  return (
    <Router>
      <div className="App">
        <h1>Pluto</h1>
        <Switch>
          <Route path="/:lang/:destination/:activity">
            <ActivityPage />
          </Route>
          <Route path="/:lang/:destination/">
            <DestinationPage />
          </Route>
          <Route path="/:lang">
            <HomePage />
          </Route>
        </Switch>
      </div>
      <TopCountries />
    </Router>
  );
}

export default App;
