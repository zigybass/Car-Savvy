import React from "react";
import { Link, withRouter } from "react-router-dom";
import Button from "./Button";
import store from "../redux/store";
import { connect } from "react-redux";
import { HEADER_MOVE, USER_LOGGED_IN } from "../redux/reducers/types";

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
    })
  }

  componentDidMount() {
    console.log(this.props);
    // Is new User logged in? Check and change view as necessary
  }

  componentDidUpdate() {
    // Is User logged in? If so, change buttons to reflect new view
    console.log(this.props);
  }

  render() {
    const { headerOpen, loggedIn, firstName } = this.props;

    let userBtns = "";
    // Styles SideNav and Buttons
    if (loggedIn) {
      userBtns = "none";
    } else {
      userBtns = headerOpen ? "none" : "unset";
    }
    let slideClass = headerOpen ? "headerNavSlide" : "headerNav";
    let findCarBtn = loggedIn ? "initial" : "none";

    return (
      <div className={slideClass}>
        <div className="container" id="navCont">
          <div id="userGreeting" style={{ display: findCarBtn }}>
            Welcome {firstName}!
          </div>
          {!loggedIn ? (
            <Link
              to="/login"
              onClick={this.slideOut}
              style={{ display: userBtns }}
            >
              <Button id="loginBtn" name="Login" />
            </Link>
          ) : (
            <Link 
            to="/"
            onClick={this.logout}>
              <Button id="logoutBtn" name="Logout" />
            </Link>
          )}
          <Link
            to="/createAccount"
            onClick={this.slideOut}
            style={{ display: userBtns }}
          >
            <Button id="createAccBtn" name="Create Account" />
          </Link>
          <Link style={{ display: findCarBtn }} to="/findCar">
            <Button id="findCarBtn" name="Find Car" />
          </Link>
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
