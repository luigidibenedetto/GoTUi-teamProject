import { SELECT_LANGUAGE, SELECT_CURRENCY } from './constants';

export const changeLanguage = () => ({
  type: SELECT_LANGUAGE,  payload: "fr-FR"
})

export const changeCurrency = (currency) => ({
  type: SELECT_CURRENCY,  payload: currency
})
  
  
