import React from "react";
import { Link } from "react-router-dom";
import store from "../../redux/store";
import { 
  HEADER_MOVE,
  CLEAR_TEXT
} from "../../redux/reducers/types";


// Need to design where FindCar btn goes.

class FindCar extends React.Component {

  componentDidMount() {
      console.log(store.getState())
    store.dispatch({
        type: HEADER_MOVE,
        action: true
      })
  }

  onSubmit = e => {
  };

  goBack = e => {
    console.log(this.props)
    store.dispatch({
      type: CLEAR_TEXT
    })
    store.dispatch({
      type: HEADER_MOVE,
      action: false
    })
  };

  render() {

    return (
      <div className="container">
        <Link to="/" id="accountArrow" onClick={this.goBack}>
          <i className="material-icons" id="backArrow">
            arrow_back
          </i>
        </Link>
        <div className="createAccountCont">
          <h4>Find Your Car</h4>
          <form>
              <input />
          </form>
        </div>
      </div>
    );
  }
};

export default FindCar;
