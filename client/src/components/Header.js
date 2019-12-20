import React from "react";
import { Link } from "react-router-dom";
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
    let { display } = store.getState();
    console.log(display.headerOpen)
  }

  componentDidMount () {
    console.log(store.getState());
  }

  // Still need to slide Header Out, currently not working but state is being updated. Or slide Header open for login?
  componentDidUpdate() {
    console.log(store.getState());
  }

  render() {
    const {headerOpen} = this.props
    console.log("render");
    let slideClass = headerOpen ? "headerNavSlide" : "headerNav";

    return (
      <div className={slideClass} >
        <div className="container" id="navCont">
          <Link to="/login" onClick={this.slideOut}>
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


const mapStateToProps = state =>  ({
  headerOpen: state.display.headerOpen
})

export default connect(mapStateToProps)(Header);
