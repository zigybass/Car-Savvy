import React from "react";
import { Link, withRouter } from "react-router-dom";
import store from "../../redux/store";
import { connect } from "react-redux";
import { USER_TEXT, PASS_TEXT, HEADER_MOVE, CLEAR_TEXT, USER_LOGGED_IN } from "../../redux/reducers/types";
import "../../utilities/requests";
import requests from "../../utilities/requests";
import auth from "../../utilities/auth";

class Login extends React.Component {

  componentDidMount() {
    console.log(this.props);
    store.dispatch({
      type: HEADER_MOVE,
      action: true
    })
  };

  onChange = e => {
    const inputName = e.target.name;
    const text = e.target.value;
    if (inputName === "username") {
      store.dispatch({
        type: USER_TEXT,
        text: text
      });
    } else if (inputName === "password") {
      store.dispatch({
        type: PASS_TEXT,
        text: text
      });
    }
  };


  // Remember to set function priority. Example: localStorage set token comes before moving window to Menu. That way data is ready on load
  onSubmit = e => {
    const input = this.props;
    const user = {
      username: input.username,
      password: input.password
    };
    store.dispatch({
      type: CLEAR_TEXT
    });
    if ( !input.username || !input.password)  {
      alert("Please enter a Username and Password");
    } else {
      requests.login(user).then(res => {
        console.log(res);
        const token = res.data.accessToken;
        const resUser = { firstName: res.data.name };
        localStorage.setItem("token", token);
        this.logInUser(resUser);
      })
      .catch(err => {
        console.log(err);
        alert("Wrong username and/or password");
      });
    }
  };

  // Needs to keep track of User ID in URL and add JWT to session.
  logInUser (user) {
    auth.forceAuth();
    console.log(user);
    // store.dispatch({
    //   type: USER_FIRSTNAME,
    //   text: user.firstName
    // });
    store.dispatch({
      type: USER_LOGGED_IN,
      action: true,
      text: user.firstName
    });
    this.props.history.push("/menu");
  };

  goBack = e => {
    store.dispatch({
      type: HEADER_MOVE,
      action: false
    });
    store.dispatch({
      type: CLEAR_TEXT
    })
  };

  render() {
    return (
      // Link cant use preventDefault(), or else wont "redirect"

      <div className="container">
          <Link to="/" id="loginArrow" onClick={this.goBack}>
            <i className="material-icons" id="backArrow">
              arrow_back
            </i>
          </Link>
        <div id="loginDesc">
          <h5>Welcome back! Please login to load your profile.</h5>
        </div>
        <div id="loginForm">
          <div className="row">
            <div className="input-field col s8">
              <input
                id="username"
                type="text"
                onChange={this.onChange}
                name="username"
                value={this.props.username}
              />
              <label htmlFor="first_name">Username</label>
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
                value={this.props.password}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          
            <button
              className="btn waves-effect yellow darken-1 black-text waves-dark"
              style={{ marginLeft: ".8rem" }}
              type="submit"
              name="action"
              onClick={this.onSubmit}
            >
              Login
            </button>
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { input } = state;
  return {
    username: input.username,
    password: input.password
  };
};

export default withRouter(connect(mapStateToProps)(Login));
