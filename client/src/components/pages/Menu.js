import React from "react";
import BubbleLink from "../BubbleLink";
import store from "../../redux/store";
import { HEADER_MOVE, USER_LOGGED_IN } from "../../redux/reducers/types";
import { connect } from "react-redux";
import axios from "axios";
import requests from "../../utilities/requests";

class Menu extends React.Component {

  componentDidMount () {

    const token = requests.checkToken();
    if (token) {
      axios.get("/api/verify", {
        headers: {
          authorization: "Bearer " + token
        }
      }).then( (response) => {
        store.dispatch({
          type: USER_LOGGED_IN,
          action: true
        })
      })
    };

    store.dispatch({
      type: HEADER_MOVE,
      action: false
    });

    // This isn't best case. Use protected routes for auth and logged in status
    // store.dispatch({
    //   type: USER_LOGGED_IN,
    //   action: true
    // });
  }

  render() {

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
    loggedIn: user.loggedIn
  }
}

export default connect(mapStateToProps)(Menu);
