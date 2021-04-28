import { SELECT_CURRENCY } from './constants';

export const changeCurrency = (currency) => ({
  type: SELECT_CURRENCY,  payload: currency
})
