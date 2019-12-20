import React from "react";
import { Link, withRouter } from "react-router-dom";
import store from "../../redux/store";
import { connect } from "react-redux";
import { USER_TEXT, PASS_TEXT, HEADER_MOVE } from "../../redux/reducers/types";
import axios from "axios";

class Login extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }

  componentDidUpdate () {
    console.log(this.props)
  }

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

  onSubmit = e => {
    const input = this.props;
    const user = {
      username: input.username,
      password: input.password
    };
    store.dispatch({
      type: HEADER_MOVE,
      action: false
    });
    console.log(user);

    axios
      .post("/api/login", user)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  goBack = e => {
    store.dispatch({
      type: HEADER_MOVE,
      action: false
    })
  }

  render() {
    return (

      // Link cant use preventDefault()...

        <div className="container">
          <Link to="/" id="loginArrow" onClick={this.goBack}>
            <i className="material-icons" id="backArrow" >arrow_back</i>
          </Link>
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
                  name="username"
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
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <Link to="/menu">
              <button
                className="btn waves-effect yellow darken-1 black-text waves-dark"
                style={{ marginLeft: ".8rem" }}
                type="submit"
                name="action"
                onClick={this.onSubmit}
              >
                Login
              </button>
            </Link>
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
  }
}

export default withRouter(connect(mapStateToProps)(Login));
