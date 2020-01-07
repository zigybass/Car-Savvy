import React from "react";
import { withRouter } from "react-router-dom";

function Provided () {
    return (
        <div className="container">
            <h4>This is protected...</h4>
        </div>
    )
};

export default withRouter(Provided);