import keys from '../env/keys'

export const getDataFromCookie = (key) => {
	if (document.cookie && document.cookie !== "") {
		let c = document.cookie.split(";").filter(s => s.includes(key))[0];
		if (c) {
			let b = c.split("=").pop()
			return b
		}
	}
		return null;
}

export const clearAllCookies = () => {
	document.cookie = `${keys.JWT}=;Path=/; Domaine=${keys.DOMAIN};Expires=Thu, 01 Jan 1970 00:00:01 GMT;`
}

export const setKeyInCookie = (key, value) => {
	document.cookie = `${key}` + "=" + value + ";path=/";
}