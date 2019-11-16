/**
 * Action Types
 */
import { parseXmlData } from '../../Utils/xmlDataParser';

export const GET_RATES = 'get rates';
export const GET_RATES_COMMIT = 'get rates commit';

/**
 * Action Creators
 */

const getRates = () => ({ type: GET_RATES });
const getRatesCommit = (rates) => ({ type: GET_RATES_COMMIT, rates });

/**
 * THUNKS
 */
let getRatesInterval;

export const getRatesThunk = () => {
  return (dispatch) => {
    dispatch(getRates());
    loadRates(dispatch);
    getRatesInterval = setInterval(() => {
      loadRates(dispatch);
    }, 10000);
  };
};

const loadRates = (dispatch) => {
  fetch(
    'https://cors-anywhere.herokuapp.com/http://www.ecb.int/stats/eurofxref/eurofxref-daily.xml'
  )
    .then((resp) => resp.text())
    .then((data) => {
      const currencies = parseXmlData(data);
      dispatch(getRatesCommit(currencies));
    });
};

export const clearRatesInterval = () => {
  clearInterval(getRatesInterval);
};
