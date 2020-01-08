import React from "react";
// import { withRouter } from "react-router-dom";

const Protected = function() {
    return (
        <div className="container">
            <h4>This info should only be seen when User is logged in</h4>
        </div>
    )
};

export default Protected;