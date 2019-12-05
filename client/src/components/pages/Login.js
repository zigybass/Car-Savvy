import React from "react";
import { Link } from "react-router-dom";
import store from "../../redux/store";
import { connect } from "react-redux";
import { USER_TEXT, SUBMIT_USER, PASS_TEXT } from "../../redux/reducers/types";

class Login extends React.Component {

  onChange = e => {
    console.log(store.getState())
    const text = {[e.target.name]: e.target.value}
    if (text.hasOwnProperty("username")) {
      store.dispatch({
        type: USER_TEXT,
        text: text
      })
    } else if (text.hasOwnProperty("password")) {
      store.dispatch({
        type: PASS_TEXT,
        text: text
      })
    }
  };

  onSubmit = e => {
    e.preventDefault();
    const { input } = store.getState();
    console.log("Username: " + input.username);
    console.log("Password: " + input.password);

    // store.dispatch({
    //   type: SUBMIT_USER,
    //   user: user
    // });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div id="loginDesc">
            <h5>
              Welcome back to CarSavvy! Please login to load your profile.
            </h5>
          </div>
          <div id="loginForm">
            <div className="row">
              <div className="input-field col s8">
                <input 
                  id="username" 
                  type="text" 
                  onChange={this.onChange} 
                  name="username" />
                <label for="first_name">Username</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s8">
                <input
                  id="password"
                  type="password"
                  className="validate"
                  onChange={this.onChange}
                  name="password"
                />
                <label for="password">Password</label>
              </div>
            </div>
          </div>
          <Link>
            <button
              className="btn waves-effect yellow darken-1 black-text waves-dark"
              type="submit"
              name="action"
              onClick={this.onSubmit}
            >
              Login
            </button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}


export default connect(null)(Login);
