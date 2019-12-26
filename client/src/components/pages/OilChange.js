import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import store from "../../redux/store";

class OilChange extends React.Component {

  componentDidMount () {
    console.log(store.getState());
  }

  render () {
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
}

export default OilChange;
