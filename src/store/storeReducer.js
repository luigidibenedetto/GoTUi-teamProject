import { defaultStore, SELECT_LANGUAGE, SELECT_CURRENCY } from './constants';

function storeReducer(state = defaultStore, action) {
  switch(action.type) {
    case SELECT_LANGUAGE:
        return {
            ...state,
            language: action.payload
        }

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