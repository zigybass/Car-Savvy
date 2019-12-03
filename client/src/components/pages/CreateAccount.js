import React from "react";
import { Link } from "react-router-dom";

function CreateAccount() {
  return (
    <div className="container">
      <div className="createAccountCont">
        <h4>Create an account here</h4>
      </div>
      <form id="createForm">
        <div className="row">
          <div className="input-field col s8">
            <input id="username" type="text" />
            <label for="first_name">First Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s8">
            <input id="username" type="text" />
            <label for="first_name">Username</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s8">
            <input id="username" type="text" />
            <label for="first_name">Password</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s8">
            <input id="username" type="text" />
            <label for="first_name">Re-enter Password</label>
          </div>
        </div>
        <Link to="/splash">
          <button
            className="btn waves-effect yellow darken-1 black-text waves-dark"
            type="submit"
            name="action"
          >
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
}

export default CreateAccount;
