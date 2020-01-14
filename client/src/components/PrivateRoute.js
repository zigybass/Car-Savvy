import React from "react";
import { Route, Redirect } from "react-router-dom";
// import requests from "../utilities/requests";
import auth from "../utilities/auth";

// const doesTokenExist = () => {
//     return requests.checkToken();
// }

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        (auth.verifyAuth()) ? 
        <Component {...props} /> :
        <Redirect to="/login"/>
    )} />
);

export default (PrivateRoute);
