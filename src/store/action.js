import { SELECT_LANGUAGE, SELECT_CURRENCY } from './constants';

// export const changeCurrency = () => {
//   return (dispatch) => {
//     dispatch({type: SELECT_CURRENCY, payload: "PIPPO"})
// }

export const changeCurrency = () => ({
  type: SELECT_CURRENCY,  payload: "PIPPO"
})
  
