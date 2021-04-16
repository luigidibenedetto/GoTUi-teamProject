import './App.css';
import HomePage from './pages/HomePage'
import DestinationPage from './pages/DestinationPage'
import ActivityPage from './pages/ActivityPage'
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
