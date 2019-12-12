import React from "react";
import Title from "../pages/Title";
import Button from "../Button";

class Menu extends React.Component {

    render () {

        return  (

            <div className="container">
                <Title />
                <Button id="findCarBtn" name="Find Car"/>
            </div>

        )
    }


}

export default Menu;