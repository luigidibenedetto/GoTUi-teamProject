import { SELECT_CURRENCY, SET_UUID } from './constants';

export const changeCurrency = (currency) => ({
  type: SELECT_CURRENCY,  payload: currency
})
  
export const setUuid = (uuid) => ({
  type: SET_UUID, payload: uuid
})  
