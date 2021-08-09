import Http from '../axios/axios';

import { handleError } from '../utility/utility'
import { createStorage } from '../localStorage/localStorage'

export const USER_LOGIN = '(LOGIN) USER_LOGIN';
// action creator
const handleLoginResponse = res => ({
  type: USER_LOGIN,
  payload: {
    ...res
  }
});


export const logInUser = (data) => {
 	return async (dispatch) =>  {
 
 		/**
		  *	in a real world you will do this comment ajax call to test user 
		  * data with database / in /user/login route
		  * and pass the data to reducers/login.reducer.js with dispatch
 		*/
 		// const res 		= await Http.post('/user/login', data );
		// console.log('res' , res);
		// const {data} = res;
		// dispatch( handleLoginResponse(data) ) ;

		// if ( data.response == true ) {
		// 	dispatch(handleLoginResponse(data)) ;
		// 	createStorage('app-token' , data.token);
		// 	createStorage('app-username' , data.username);
		// }
		
	 	// dummy data
		const token 	= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
		const username  = 'testuser';
		const res = {
			data: {
				response : true,
				token, 
				username
			}
		}
		const {data} = res;
		dispatch(handleLoginResponse(data)) ;
		createStorage('app-token' , data.token);
		createStorage('app-username' , data.username);

 	}
};


