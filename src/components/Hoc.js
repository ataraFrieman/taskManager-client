import React from 'react';
/**
 * Higher-Order Components 
*/
export const Hoc = ( props ) => {
	return(
		<div className="hoc">
			{props.children}
		</div>
	)
}