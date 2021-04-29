import { defaultStore, SELECT_CURRENCY, SET_I18N_BUNDLE } from './constants';

function storeReducer(state = defaultStore, action) {
  switch(action.type) {

    case SELECT_CURRENCY:
<<<<<<< HEAD
      return {
        ...state,
        currency: action.payload
      }
=======
        return {
            ...state,
            currency: action.payload
        }

    case SET_I18N_BUNDLE:
      return {
          ...state,
          i18nBundle: action.payload
      }

>>>>>>> main
  
    default :
      return state
  }
};

export default storeReducer;