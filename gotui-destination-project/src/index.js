import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './Styles/Normalize.css';
import { Provider } from 'react-redux';
 import { store } from './Store/reduxStore';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

