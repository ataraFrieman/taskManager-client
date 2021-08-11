import { combineReducers } from 'redux';
import loginReducer from './login.reducer';
// Combine with other reducers we may add in the future
const appReducers = combineReducers({
  login:loginReducer,
});

export default appReducers;
