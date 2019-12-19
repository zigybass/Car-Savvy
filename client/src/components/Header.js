import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import store from "../redux/store";
import { HEADER_MOVE } from "../redux/reducers/types";

class Header extends React.Component {

  // Triggers menu slide out
  slideOut () {
    store.dispatch({
      type: HEADER_MOVE
    })
  }

  // Still need to slide Header Out, currently not working but state is being updated
  componentDidMount () {
    console.log(store.getState())
  }

  render() {

    const { display } = store.getState();
    let style = ""

    if ( display.headerOpen === false ) {
      style = "navSlideOut 1.2s ease-in"
    } else {
      style = "navSlide 1.6s ease-in"
    }

    return (
      <div id="headerNav" style={{animation: style}} >
        <div className="container" id="navCont">
        <Link to="/login" onClick={this.slideOut} >
          <Button id="loginBtn" name="Login"/>
        </Link>
        <Link to="/createAccount">
          <Button id="createAccBtn" name="Create Account" />
        </Link>
        </div>
      </div>
    );
  }
}

export default Header;
