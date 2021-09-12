/*
	App routes files
*/
import React, { Suspense } from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

import { isUserLoggedIn } from "../utility/utility";
import AuthProvider from  '../providers/authProvider'
// pages

// lazy load components
const SighnUp = React.lazy(() => import("../pages/login/sighnUp.component"));
const Login = React.lazy(() => import("../pages/login/sighnIn.component"));

const Admin = React.lazy(() => import("../pages/auth/admin/admin"));

// auth routes
const PrivateRoute = ({ isLoggedIn, ...props }) => {
  return isLoggedIn ? <Route {...props} /> : <Redirect to="/login" />;
};

// Posts
// import Posts from '../Posts/Posts/Posts';

/*
 * Defing client route
 *
 */
export const Routes = () => {
  const loggedIn = isUserLoggedIn();
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <AuthProvider>
            <Route path="/" component={SighnUp} exact />
            <Route path="/signup" component={SighnUp} />
            <Route path="/login" component={Login} />
          </AuthProvider>
          <PrivateRoute isLoggedIn={loggedIn} path="/" component={Admin} />
          <Route>
            <Redirect to="/login" />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};
