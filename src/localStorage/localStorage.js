/*
 * cleanStorageToken 
 * delete From localStorage  by key 
*/
export const cleanFromStorage = (item) => {
	localStorage.removeItem(item);
}

/*
 * cleanStorageToken 
 * delete From localStorage  by key 
*/
export const cleanAll = () => {
	localStorage.clear();
}

/*
 * createStorageToken 
 
 * @param key string  
 * @param value string  
*/
export const createStorage = ( key , value ) => {
	localStorage.setItem(key, value);
}     
/*
 * getFromStorage 
 * get the value from local storage by key
 * return null || token
*/
export const getDataFromStorage = (key) => {
	return localStorage.getItem(key); 
}  