import React from "react";
import { Route, Redirect } from "react-router-dom";
import fakeAuth from "../utilities/fakeAuth";

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        fakeAuth ? 
        <Component {...props} /> :
        <Redirect to="/login"/>
    )} />
);

export default PrivateRoute;
