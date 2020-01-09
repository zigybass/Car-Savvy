import React from "react";
import { Link, withRouter } from "react-router-dom";
import store from "../../redux/store";
import { HEADER_MOVE, CLEAR_TEXT } from "../../redux/reducers/types";
import { connect } from "react-redux";
import { Select } from "react-materialize";
import carMake from "../../utilities/carList";

// Need to design where FindCar btn goes. Seems the ternary operator is messing with styles?

class FindCar extends React.Component {
  componentDidMount() {
    store.dispatch({
      type: HEADER_MOVE,
      action: true
    });
  }

  onSubmit = e => {};

  goBack = e => {
    console.log(this.props);
    store.dispatch({
      type: CLEAR_TEXT
    });
    store.dispatch({
      type: HEADER_MOVE,
      action: false
    });
  };

  render() {

    const mapMake = 
    carMake.map( (make, i) => {
      return (
        <option value={i}>{make}</option>
      )
    } );

    return (
      <div className="container">
        <Link to="/" id="accountArrow" onClick={this.goBack}>
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
                hover: false,
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
            <option value="1">Ford</option>
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
                hover: false,
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
            <option value="1">Ford</option>
            <option value="2">Ferrari</option>
            <option value="3">Lotus</option>
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
