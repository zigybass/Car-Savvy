import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

class Header extends React.Component {
  render() {
    return (
      <div id="headerNav">
        <div className="container" id="navCont">
        <Link to="/login">
          <Button id="loginBtn" name="Login" />
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
