import React from "react";
import { Link } from "react-router-dom";
import store from "../../redux/store";
import { connect } from "react-redux";
import { USER_TEXT, PASS_TEXT } from "../../redux/reducers/types";
import axios from "axios";

class Login extends React.Component {

  componentDidMount () {
    console.log(store.getState());
  }

  onChange = e => {
    console.log(store.getState())
    const inputName = e.target.name;
    const text = e.target.value;
    if (inputName === "username") {
      store.dispatch({
        type: USER_TEXT,
        text: text
      })
    } else if (inputName === "password") {
      store.dispatch({
        type: PASS_TEXT,
        text: text
      })
    }
  };

  onSubmit = e => {
    e.preventDefault();
    const { input } = store.getState();
    const user = {
      username: input.username,
      password: input.password
    }
    console.log(user)
    

    axios.post('/api/login', user).then( res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err.response)
    })
  }

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
