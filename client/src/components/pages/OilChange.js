import React from "react";
import { Link } from "react-router-dom";

function OilChange () {
    return (
        <div className="container">
            <h4 className="oilTitle" >Oil Change Page</h4>
            <Link to="/menu">
            <i className="material-icons">arrow_back</i>
            </Link>
        </div>
    )
}

export default OilChange;