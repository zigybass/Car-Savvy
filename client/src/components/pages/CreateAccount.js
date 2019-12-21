import React from "react";
import { Link } from "react-router-dom";
import store from "../../redux/store";
import { connect } from "react-redux";
import { FIRST_TEXT, USER_TEXT, PASS_TEXT, PASS_CONFIRM, HEADER_MOVE } from "../../redux/reducers/types";
import axios from "axios";

class CreateAccount extends React.Component {
  componentDidMount() {
    console.log(store.getState());
  }

  onChange = e => {
    console.log(store.getState());
    const inputName = e.target.name;
    const text = e.target.value;
    if (inputName === "firstName") {
      store.dispatch({
        type: FIRST_TEXT,
        text: text
      });
    } else if (inputName === "username") {
      store.dispatch({
        type: USER_TEXT,
        text: text
      });
    } else if (inputName === "password") {
      store.dispatch({
        type: PASS_TEXT,
        text: text
      });
    } else if (inputName === "secondPassword") {
      store.dispatch({
        type: PASS_CONFIRM,
        text: text
      });
    }
  };

  onSubmit = e => {
    const { input } = store.getState();
    const newUser = {
      firstName: input.firstName,
      username: input.username,
      password: input.password
    };
    this.checkPasswords(newUser.password)
    console.log(newUser);
    axios
      .post("/api/users", newUser)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log("Error: " + err);
      });
  };

  checkPasswords (pass, pass2) {



  }

  goBack = e => {
    store.dispatch({
      type: HEADER_MOVE,
      action: false
    })
  }

  render() {
    return (
      <div className="container">
        <Link to="/" id="accountArrow" onClick={this.goBack}>
          <i className="material-icons" id="backArrow">
            arrow_back
          </i>
        </Link>
        <div className="createAccountCont">
          <h4>Create an account here</h4>
        </div>
        <form id="createForm">
          <div className="row">
            <div className="input-field col s8">
              <input
                id="username"
                type="text"
                name="firstName"
                onChange={this.onChange}
              />
              <label for="first_name">First Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8">
              <input
                id="username"
                type="text"
                name="username"
                onChange={this.onChange}
              />
              <label for="first_name">Username</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8">
              <input
                id="username"
                type="text"
                name="password"
                onChange={this.onChange}
              />
              <label for="first_name">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8">
              <input
                id="username"
                type="text"
                name="secondPassword"
                onChange={this.onChange}
              />
              <label for="first_name">Re-enter Password</label>
            </div>
          </div>
          <Link>
            <button
              className="btn waves-effect yellow darken-1 black-text waves-dark"
              type="submit"
              name="action"
              style={{ marginLeft: ".8rem" }}
              onClick={this.onSubmit}
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default connect(null)(CreateAccount);
