import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";

function OilChange() {
  return (
    <div>
      <Header />
      <div className="container">
        <h4 className="oilTitle">Oil Change Page</h4>
        <Link to="/menu">
          <i className="material-icons">arrow_back</i>
        </Link>
      </div>
    </div>
  );
}

export default OilChange;
