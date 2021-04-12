import './App.css';
import HomePage from './Pages/HomePage'
import DestinationPage from './Pages/DestinationPage'
import ActivityPage from './Pages/ActivityPage'
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
    </Router>
  );
}

export default App;
