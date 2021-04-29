import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import axios from "axios"
import './App.css';
import HomePage from './pages/HomePage'
import DestinationPage from './pages/DestinationPage'
import ActivityPage from './pages/ActivityPage'
import Header from './components/Header'
import Footer from './components/Footer'
import { loadI18nBundle } from './store/action'
import { I18N_MODULE_NAMESPACE } from './utils/translations'

function App() {
  const dispatch = useDispatch()
  const lang = useSelector(state => state.language)

  useEffect(() => {
    async function fetchI18nTranslations() {
      const response = await axios.get('i18n', {
        baseURL: 'https://fe-apiproxy.musement.com/',
        params: {
          namespace: I18N_MODULE_NAMESPACE,
          lang,
        },
      });
      dispatch(loadI18nBundle(response.data)) 
    }
    fetchI18nTranslations()
  }, [])

  const defaultPath = useSelector(state => state.path);

  return (
    <Router>
      <div className="App">
        <Header />
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
