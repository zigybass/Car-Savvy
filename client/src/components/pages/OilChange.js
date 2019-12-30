import React from "react";
import store from "../../redux/store";
import { connect } from "react-redux";
import { HEADER_MOVE } from "../../redux/reducers/types";

class OilChange extends React.Component {

  componentDidMount () {
    console.log(store.getState());
    store.dispatch({
      type: HEADER_MOVE,
      action: false
    })
  }

  render () {
  return (
    <div> 
      <div className="container">
        <h4 className="oilTitle">Oil Change Page</h4>
      </div>
    </div>
  );
}
}

export default connect(null)(OilChange);
