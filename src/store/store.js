import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import ratesReducer from './reducers/rates.reducer';

const rootReducer = combineReducers({
  rates: ratesReducer,
});

const composeEnhancers = composeWithDevTools({});

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
