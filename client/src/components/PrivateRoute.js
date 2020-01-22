import React from "react";
import { Route, Redirect } from "react-router-dom";


const PrivateRoute = ({component: Component, ...rest}) => {

    console.log({...rest}.data)
return  (

    <Route {...rest} render={(props) => (
        (props.data) ? 
        <Component {...props} /> :
        <Redirect to="/login"/>
    )} />
)}

export default (PrivateRoute);
