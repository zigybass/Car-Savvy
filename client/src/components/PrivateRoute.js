import React from "react";
import { Route, Redirect } from "react-router-dom";
import requests from "../utilities/requests";


const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        requests.checkToken() ? 
        <Component {...props} /> :
        <Redirect to="/login"/>
    )} />
);

export default (PrivateRoute);
