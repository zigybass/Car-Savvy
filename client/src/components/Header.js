import React from "react";
import { Link, withRouter } from "react-router-dom";
import Button from "./Button";
import store from "../redux/store";
import { connect } from "react-redux";
import { HEADER_MOVE, USER_LOGGED_IN } from "../redux/reducers/types";
import requests from "../utilities/requests";

class Header extends React.Component {

  // Triggers menu slide out
  slideOut() {
    store.dispatch({
      type: HEADER_MOVE,
      action: true
    });
  };

  logout () {
    store.dispatch({
      type: USER_LOGGED_IN,
      action: false
    });
    requests.logout();
  };

  render() {
    const { headerOpen, loggedIn, firstName } = this.props;

    let userBtns = "";
    if (headerOpen) {
      userBtns = "none"
    } else {
      userBtns = "unset"
    };
    // Styles SideNav and Buttons
    // if (loggedIn) {
    //   userBtns = "none";
    // } else {
    //   userBtns = headerOpen ? "none" : "unset";
    // }
    let slideClass = headerOpen ? "headerNavSlide" : "headerNav";
    // let findCarBtn = loggedIn ? "initial" : "none";

    return (
      <div className={slideClass}>
        <div className="container" id="navCont">

          {loggedIn && !headerOpen ? (
            <div id="userGreeting">
            Welcome {firstName}!
          </div>
          ) : (
            null
          )}

            <Link
              to={loggedIn ? "/" : "/login"}
              onClick={loggedIn ? this.logout : this.slideOut}
              style={{ display: userBtns }}
            >
              <Button 
              id={loggedIn ? "logoutBtn" : "loginBtn"}
              name={loggedIn ? "Logout" : "Login"} />
            </Link>

          {!loggedIn ? <Link
            to="/createAccount"
            onClick={this.slideOut}
            style={{ display: userBtns }}
          >
            <Button id="createAccBtn" name="Create Account" />
          </Link> : null}
          {!loggedIn ? null : <Link 
          to="/findCar"
          style={{ display: userBtns }}>
            <Button name="Find Car" />
          </Link>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { display, user } = state;
  return {
    headerOpen: display.headerOpen,
    loggedIn: user.loggedIn,
    firstName: user.firstName
  };
};

export default withRouter(connect(mapStateToProps)(Header));
