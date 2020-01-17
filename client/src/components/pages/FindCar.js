import React from "react";
import { Link, withRouter } from "react-router-dom";
import store from "../../redux/store";
import { HEADER_MOVE, USER_LOGGED_IN, YEAR_INPUT } from "../../redux/reducers/types";
import { connect } from "react-redux";
import carMake from "../../utilities/carList";
import auth from "../../utilities/auth";
import requests from "../../utilities/requests";
import axios from "axios";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';

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
    console.log(year);
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

    const useStyles = makeStyles({
      root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
      },
    });

    // Adds dates to table, yearList maps it to 3rd Select
    const table = [];
    for ( let i = 2020; i >= 1990; i-- ) {
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
        <MenuItem key={i}>{make}</MenuItem>
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

          <FormControl >
        <InputLabel id="demo-simple-select-label">Make</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="makeList"
        >
          {mapMake}
        </Select>
      </FormControl>
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
