import React, { useState } from "react";

function Login() {
  return (
    <React.Fragment>
      <div className="container">
        <div id="loginDesc">
          <h5>Welcome back to CarSavvy! Please login to load your profile.</h5>
        </div>
        <div id="loginForm">
          <div className="row">
            <div className="input-field col s8">
              <input id="username" type="text" />
              <label for="first_name">Username</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8">
              <input id="password" type="password" className="validate" />
              <label for="password">Password</label>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
