import React from "react";
import Button from "../Button";
import BubbleLink from "../BubbleLink";
import store from "../../redux/store";
import { HEADER_MOVE } from "../../redux/reducers/types";

class Menu extends React.Component {

  componentDidMount () {
    store.dispatch({
      type: HEADER_MOVE,
      action: false
    })
  }

  render() {

    return (
      <div className="container">
        <div>
          <Button id="findCarBtn" name="Find Car" />
        </div>
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

export default Menu;
