
export const setDataInSessionStorage = ( key , value ) => {
	sessionStorage.setItem(key, JSON.stringify(value));
}     

export const getDataFromSessionStorage = (key) => {
	return sessionStorage.getItem(key); 
}