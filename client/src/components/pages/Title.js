import React from "react";
import Button from "../../components/Button";

function Title () {
    return (
        <React.Fragment>
            <div>
            <h4 id="title">CarSavvy</h4>
            </div>
            <div>
                <Button name="Login"/>
            </div>
        </React.Fragment>
    )
}

export default Title;