
import React from "react";
import BubbleLink from "../BubbleLink";
import store from "../../redux/store";
import { HEADER_MOVE } from "../../redux/reducers/types";
import { connect } from "react-redux";
import auth from "../../utilities/auth";
// import requests from "../../utilities/requests";
// import axios from "axios";

class Menu extends React.Component {

  componentDidMount () {

    console.log(this.props)

    auth.verifyAuth().then(
      console.log("auth call finished")
    )

    store.dispatch({
      type: HEADER_MOVE,
      action: false
    });

    console.log(this.props);

  }

  render() {
    console.log("render Menu")

    return (
      <div className="container">
        <div className="row">
          <div id="buttonRow">
            <BubbleLink name="Oil Change" to="/oilChange"/>
            <BubbleLink name="Tire Rotation" to="/tireRotation"/>
            <BubbleLink name="Repairs" to="/repairs"/>
            <BubbleLink name="Recalls" to="/recalls"/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state;
  return {
    firstName: user.firstName,
    loggedIn: user.loggedIn,
    verify: user.verify
  }
}

export default connect(mapStateToProps)(Menu);
