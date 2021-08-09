import axios from 'axios';
import { API_URL } from '../config';
import { getDataFromStorage } from '../localStorage/localStorage'



var  Http = axios.create({
  baseURL: API_URL ,
  headers: {
  	'content-type': 'application/json' 
  }
});


// auth calls 
if ( getDataFromStorage('app-token') ) {
	var  Http = axios.create({
		baseURL: API_URL , 
		headers: {
			'content-type': 'application/json',
			'Authorization': 'Bearer ' + getDataFromStorage('app-token') 
		}
	});
	
}





export default Http  