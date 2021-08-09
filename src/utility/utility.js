import React  from 'react';
import { getDataFromStorage } from '../localStorage/localStorage'

/**
 * hendleError 
 * main app hendle ajax error
*/
export const handleError = ( e )  => {
	console.log(e);
}


/**
 * handleInputChange 
 * main input  ajax error
*/
export const handleInputChange = (event) => {
	const target = event.target;
	const value = target.type === 'checkbox' ? target.checked : target.value;
	const name = target.name;
	return {
		name,
		value
	}
}


// validation 

export const simpleValidation = (o) => {
    if (o.val === '') {

        return false;
    } else {
        return true;
    }
}

// regx validation 
export const  regxValidation = ( o ) => {
    if ( o.val === '' ) {
        return false;
    } else {
        if (o.expression.test(o.val)) {
            return true;
        } else {
            return false;
        }
    }
}

export const isUserLoggedIn = () => {
    return getDataFromStorage('app-token') != null ? true : false ;
}

export const authRedirect = () => {
    window.location.replace('/');
}


