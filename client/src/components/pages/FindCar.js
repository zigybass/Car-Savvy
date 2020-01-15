import React from "react";
import { Link, withRouter } from "react-router-dom";
import store from "../../redux/store";
import { HEADER_MOVE, USER_LOGGED_IN, YEAR_INPUT } from "../../redux/reducers/types";
import { connect } from "react-redux";
import { Select } from "react-materialize";
import carMake from "../../utilities/carList";
import auth from "../../utilities/auth";
import requests from "../../utilities/requests";
import axios from "axios";

// Need to design where FindCar btn goes. Seems the ternary operator is messing with styles?

class FindCar extends React.Component {

  componentDidMount() {

    if (requests.checkToken()) {
      auth.forceAuth();
      store.dispatch({
        type: USER_LOGGED_IN,
        action: true
      });
    };

    store.dispatch({
      type: HEADER_MOVE,
      action: true
    });
    console.log(auth.isAuth)
  }

  onChange = e => {
    const year = e.target.value;
    console.log(year)
    store.dispatch({
      type: YEAR_INPUT,
      text: year
    })
  }

  findModels = e => {

    axios.post("/api/models", {})
  };

  goBack = e => {
    console.log(this.props);
    store.dispatch({
      type: HEADER_MOVE,
      action: false
    });
  };

  render() {

    // Adds dates to table, yearList maps it to 3rd Select
    const table = [];
    for ( let i = 2020; i >= 1995; i-- ) {
      table.push(i);
    };

    const yearList = 
    table.map( i => {
      return (
        <option key={i}>{i}</option>
      )
    })

    const mapMake = 
    carMake.sort().map( (make, i) => {
      return (
        <option key={i}>{make}</option>
      )
    } );

    return (
      <div className="container">
        <Link to="/menu" id="accountArrow" onClick={this.goBack}>
          <i className="material-icons" id="backArrow">
            arrow_back
          </i>
        </Link>
        <div className="createAccountCont">
          <h4>Find Your Car</h4>

          <Select
          id="makeList"
            onChange={function noRefCheck() {}}
            options={{
              classes: "",
              dropdownOptions: {
                alignment: "left",
                autoTrigger: true,
                closeOnClick: true,
                constrainWidth: true,
                container: null,
                coverTrigger: true,
                hover: true,
                inDuration: 150,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 250
              }
            }}
            value=""
          >
            <option disabled value="">
              Make
            </option>
            {mapMake}
          </Select>
          <Select
          id="modelList"
            onChange={function noRefCheck() {}}
            options={{
              classes: "",
              dropdownOptions: {
                alignment: "left",
                autoTrigger: true,
                closeOnClick: true,
                constrainWidth: true,
                container: null,
                coverTrigger: true,
                hover: true,
                inDuration: 150,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 250
              }
            }}
            value=""
          >
            <option disabled value="">
              Model
            </option>
            <option value="1">Models will go here</option>
          </Select>
          <Select
          id="yearList"
            onChange={this.onChange}
            options={{
              classes: "",
              dropdownOptions: {
                alignment: "left",
                autoTrigger: true,
                closeOnClick: true,
                constrainWidth: true,
                container: null,
                coverTrigger: true,
                hover: true,
                inDuration: 150,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 250
              }
            }}
            value={this.props.year}
          >
            <option disabled value="">
              Year
            </option>
            {yearList}
          </Select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { input } = state;
  return {
    mileage: input.mileage,
    make: input.make,
    model: input.model,
    year: input.year
  };
};

export default withRouter(connect(mapStateToProps)(FindCar));
