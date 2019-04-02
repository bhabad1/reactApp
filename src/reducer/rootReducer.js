import { combineReducers } from 'redux';

import {reducer as formReducer} from 'redux-form';
import counterReducer from './index';

const appReducer = combineReducers({
  counter: counterReducer,
  form: formReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
}

export default rootReducer;