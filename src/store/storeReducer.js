import { defaultStore, SELECT_CURRENCY, SET_UUID } from './constants';

function storeReducer(state = defaultStore, action) {
  switch(action.type) {

    case SELECT_CURRENCY:
        return {
            ...state,
            currency: action.payload
        }
    case SET_UUID:
      return {
        ...state,
        uuid: action.payload
      }

    default :
        return state
  }
};

export default storeReducer;