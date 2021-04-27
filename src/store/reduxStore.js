import {createStore, compose} from 'redux';
import storeReducer from './storeReducer';
import { defaultStore } from './constants';
  
export const store = createStore(storeReducer, defaultStore, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))