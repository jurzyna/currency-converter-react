import { GET_RATES, GET_RATES_COMMIT } from '../actions/rates.action';

const initialState = {
  data: [],
  loading: false,
  loaded: false,
};

const ratesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RATES:
      return {
        ...state,
        loading: true,
      };
    case GET_RATES_COMMIT:
      return {
        ...state,
        loaded: true,
        loading: false,
        data: action.rates,
      };
    default:
      return state;
  }
};

export default ratesReducer;
