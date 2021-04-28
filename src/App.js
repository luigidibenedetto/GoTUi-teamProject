import './App.css';
import HomePage from './pages/HomePage'
import DestinationPage from './pages/DestinationPage'
import ActivityPage from './pages/ActivityPage'
import Header from './components/Header'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

function App() {

  const defaultPath = useSelector(state => state.path);
  const uuid = "47543853-76bc-4cbb-b4e1-4c2030f216f9"


  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/:lang/:destination/:activity">
            <ActivityPage uuid={uuid} />
          </Route>
          <Route path="/:lang/:destination/">
            <DestinationPage />
          </Route>
          <Route path="/:lang">
            <HomePage />
          </Route>
          <Route path="/">
            <Redirect to={defaultPath} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
