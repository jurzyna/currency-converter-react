import { connect } from 'react-redux';
import {
  clearRatesInterval,
  getRatesThunk,
} from '../store/actions/rates.action';
import { useEffect } from 'react';

const Conventer = () => {
  useEffect(() => () => clearRatesInterval(), []);
  return <h1>Conventer</h1>;
};

const mapStateToProps = (state) => ({
  rates: state.rates,
});

const mapDispatchToProps = (dispatch) => {
  dispatch(getRatesThunk());
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Conventer);
