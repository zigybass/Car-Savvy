import React from "react";
import Title from "../pages/Title";
import Button from "../Button";
import BubbleLink from "../BubbleLink";

class Menu extends React.Component {

    render () {

        return  (

            <div className="container">
                <Title />
                <Button id="findCarBtn" name="Find Car"/>
                <BubbleLink name="Oil Change" />
                <BubbleLink name="Tire Rotation"/>
                <BubbleLink name="Repairs"/>
            </div>

        )
    }


}

export default Menu;