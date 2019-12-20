import React from "react";
import { Link, withRouter } from "react-router-dom";
import Button from "./Button";
import store from "../redux/store";
import { connect } from "react-redux";
import { HEADER_MOVE } from "../redux/reducers/types";
// import { HEADER_MOVE } from "../redux/reducers/types";

class Header extends React.Component {
  
  // Triggers menu slide out
  slideOut() {
    store.dispatch({
      type: HEADER_MOVE,
      action: true
    })
  }

  componentDidMount () {
    console.log(this.props)
  }

  render() {
    const {headerOpen} = this.props;

    // Styles SideNav and Buttons
    let slideClass = headerOpen ? "headerNavSlide" : "headerNav";
    let hideBtn = headerOpen ? "none" : "unset";

    return (
      <div className={slideClass} >
        <div className="container" id="navCont">
          <Link to="/login" onClick={this.slideOut} style={{display: hideBtn}} >
            <Button id="loginBtn" name="Login" />
          </Link>
          <Link to="/createAccount" onClick={this.slideOut} style={{display: hideBtn}} >
            <Button id="createAccBtn" name="Create Account" />
          </Link>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state =>  ({
  headerOpen: state.display.headerOpen
})

export default withRouter(connect(mapStateToProps)(Header));
