import React from "react";
import Title from "../pages/Title";
import Button from "../Button";
import BubbleLink from "../BubbleLink";

class Menu extends React.Component {

  render() {
    return (
      <div className="container">
        <div>
          <Title />
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
