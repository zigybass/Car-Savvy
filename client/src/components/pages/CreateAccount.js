import React from "react";
import { Link, withRouter } from "react-router-dom";
import store from "../../redux/store";
import { connect } from "react-redux";
import { 
  FIRST_TEXT, 
  USER_TEXT, 
  PASS_TEXT, 
  PASS_CONFIRM, 
  HEADER_MOVE,
  CLEAR_TEXT
} from "../../redux/reducers/types";
import axios from "axios";

class CreateAccount extends React.Component {

  componentDidMount() {
    console.log(this.props);
    store.dispatch({
      type: HEADER_MOVE,
      action: true
    })
  }

  onChange = e => {
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
    console.log(this.props);
  };

  onSubmit = e => {
    const input = this.props;
    console.log(input);
    const pass = input.password;
    const passConfirm = input.passConfirm;
    if ( input.username === "") {
      alert("Please enter a username")
    } else if ( input.firstName === "") {
      alert("Please enter a first name")
    } else {
      this.checkPasswords(pass, passConfirm)
    }
  };

  checkPasswords (pass, pass2) {
    if ( pass !== pass2 ) {
      alert("Passwords don't match")
    } else if ( (pass === "") || (pass2 === "") ) {
      alert("Please enter a password")
    } else if ( pass === pass2 ) {
      this.props.history.push("/menu")
      this.createAccount();
    } 
  };

  createAccount = () => {
    const input = this.props;
    const newUser = {
      firstName: input.firstName,
      username: input.username,
      password: input.password
    };
    axios
      .post("/api/users", newUser)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log("Error: " + err);
      });

  }

  goBack = e => {
    console.log(this.props)
    store.dispatch({
      type: CLEAR_TEXT
    })
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
                value={this.props.firstName}
              />
              <label htmlFor="first_name">First Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8">
              <input
                id="username"
                type="text"
                name="username"
                onChange={this.onChange}
                value={this.props.username}
              />
              <label htmlFor="first_name">Username</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8">
              <input
                id="username"
                type="password"
                name="password"
                onChange={this.onChange}
                value={this.props.password}
              />
              <label htmlFor="first_name">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s8">
              <input
                id="username"
                type="password"
                name="secondPassword"
                onChange={this.onChange}
                value={this.props.passConfirm}
              />
              <label htmlFor="first_name">Re-enter Password</label>
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

const mapStateToProps = (state) => {
  const { input } = state;
  return {
    username: input.username,
    firstName: input.firstName,
    password: input.password,
    passConfirm: input.passConfirm
  }
}

export default withRouter(connect(mapStateToProps)(CreateAccount));
