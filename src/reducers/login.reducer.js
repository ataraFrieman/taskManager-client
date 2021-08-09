import { USER_LOGIN } from '../actions/login.actions';

const initialState = {
	response: false,
	token:'',
	username: '',
  	errMsg : ''

};
function loginReducer(state = initialState, action) {

 	if (action.type === USER_LOGIN) {

 		return {
	        ...state,
	        response: action.payload.response,
          token: action.payload.token,
	      username: action.payload.username,
          errMsg: action.payload.errMsg
          
    };
	}

	return state;

};
export default loginReducer;
