import React from "react";
import { Link, withRouter } from "react-router-dom";
import store from "../../redux/store";
import { HEADER_MOVE, CLEAR_TEXT, USER_LOGGED_IN } from "../../redux/reducers/types";
import { connect } from "react-redux";
import { Select } from "react-materialize";
import carMake from "../../utilities/carList";
import auth from "../../utilities/auth";
import requests from "../../utilities/requests";

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

  onSubmit = e => {};

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
          id="selectOptions"
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
          id="selectOptions"
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
          id="selectOptions"
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
    mileage: input.mileage
  };
};

export default withRouter(connect(mapStateToProps)(FindCar));
