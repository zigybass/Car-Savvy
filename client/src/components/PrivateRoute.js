import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (

  <Route
    {...rest}
    render={props =>
      this.props.loggedIn ? <Component {...props} /> : <Redirect to="/login" />
    }
    {...rest}
  />
);

const mapStateToProps = state => {
  const { user } = state;
  return {
    loggedIn: user.loggedIn
  };
};

export default connect(mapStateToProps)(PrivateRoute);
