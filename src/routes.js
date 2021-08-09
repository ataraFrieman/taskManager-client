/*
	App routes files
*/
import React, { Suspense, lazy } from 'react';
import { 	Route,
			Switch, 
			Redirect, 
			BrowserRouter as Router } from 'react-router-dom'

import { isUserLoggedIn } from './utility/utility'

// pages

// lazy load components
const Login = React.lazy(() => import('./pages/login/login'));
const Admin = React.lazy(() => import('./pages/auth/admin/admin'));

// auth routes
const PrivateRoute = ({ isLoggedIn, ...props }) => {
	return isLoggedIn ? <Route { ...props } /> : <Redirect to="/login" />
}

// Posts
// import Posts from '../Posts/Posts/Posts';

/*
 * Defing client route
 * 
*/
export const Routes = () => {
	const loggedIn = isUserLoggedIn();
	return(
		<Router>
		  	<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<Route path="/login" component={Login}/>
					<PrivateRoute isLoggedIn={ loggedIn } path="/" component={Admin} />
					<Route>
	   					<Redirect to="/login" />
					</Route>
				</Switch>
		 	</Suspense>
		</Router>

	)
}
