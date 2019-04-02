import {
  connect
} from 'react-redux'
import Counter from '../component/counter'
import {
  increment,
  decrement,
  reset
} from '../actions';

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset())
  };
};
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);