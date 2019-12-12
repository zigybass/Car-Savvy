import React from "react";
import { Link } from "react-router-dom";
import store from "../../redux/store";
import { connect } from "react-redux";
import { FIRST_TEXT, USER_TEXT, PASS_TEXT } from "../../redux/reducers/types";

class CreateAccount extends React.Component {

  componentDidMount () {
    console.log(store.getState());
  }

  onChange = e => {
    console.log(store.getState())
    const inputName = e.target.name;
    const text = e.target.value;
    if (inputName === "firstName") {
      store.dispatch({
        type: FIRST_TEXT,
        text: text
      })
    } else if (inputName === "username") {
      store.dispatch({
        type: USER_TEXT,
        text: text
      })
    } else if (inputName === "password") {
      store.dispatch({
        type: PASS_TEXT,
        text: text
      })
    } else if (inputName === "secondPassword") {
      store.dispatch({
        type: PASS_TEXT,
        text: text
      })
    }
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(store.getState())
    const { input } = store.getState();
    const newUser = {
      firstName: input.firstName,
      username: input.username,
      password: input.password
    }
    console.log(newUser)
  }

  render () {
  return (
    <div className="container">
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
            onChange={this.onChange} />
            <label for="first_name">First Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s8">
            <input 
            id="username" 
            type="text"
            name="username"
            onChange={this.onChange} />
            <label for="first_name">Username</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s8">
            <input 
            id="username" 
            type="text"
            name="password"
            onChange={this.onChange} />
            <label for="first_name">Password</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s8">
            <input 
            id="username" 
            type="text"
            name="secondPassword"
            onChange={this.onChange} />
            <label for="first_name">Re-enter Password</label>
          </div>
        </div>
        <Link>
          <button
            className="btn waves-effect yellow darken-1 black-text waves-dark"
            type="submit"
            name="action"
            onClick={this.onSubmit}
          >
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
}
};

export default connect(null)(CreateAccount);
