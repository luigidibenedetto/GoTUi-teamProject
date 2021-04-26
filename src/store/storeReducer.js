import { defaultStore, SELECT_CURRENCY } from './constants';

function storeReducer(state = defaultStore, action) {
  switch(action.type) {

    case SELECT_CURRENCY:
        return {
            ...state,
            currency: action.payload
        }

    default :
        return state
  }
};

export default storeReducer;