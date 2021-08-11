import axios from 'axios';
import { getDataFromCookie } from './application/cookie'
import keys from './env/keys';


let Http;//admin
let HttpMarket ,HttpKnowMeUser;
const userName = window.location.pathname.split('/')[2];


Http = axios.create({
	baseURL: `${keys.API_URL_ADMIN}/${userName}`,
	headers: {
		'content-type': 'application/json',
	}
});

if (getDataFromCookie(keys.JWT)) {
	Http = axios.create({
		baseURL: `${keys.API_URL_ADMIN}/${userName}`,
		headers: {
			'content-type': 'application/json',
			'Authorization': getDataFromCookie(keys.JWT)
		}
	});


	const marketName = window.location.pathname.split('/')[2];

	HttpMarket = axios.create({
		baseURL: `${keys.API_URL_MARKET_MEMBER}/${marketName}`,
		headers: {
			'content-type': 'application/json',
			'Authorization': getDataFromCookie(keys.JWT)
		}
	});
	 HttpKnowMeUser = axios.create({
		baseURL: `${keys.API_URL_USER_KNOWME}/`,
		headers: {
			'content-type': 'application/json',
			'Authorization': getDataFromCookie(keys.JWT)
		}
	});
}

//viewer http
const HttpView = axios.create({
	baseURL: keys.API_URL_PUBLIC,
	headers: {
		'content-type': 'application/json',
	}
});

const user = window.location.pathname.split('/')[2];

const HttpFile = axios.create({
	baseURL: `${keys.API_URL_FILES}/${user}`,
	headers: {
		'authorization': getDataFromCookie(keys.JWT)
	}
});


export default Http;
export { HttpMarket, HttpFile, HttpView ,HttpKnowMeUser}