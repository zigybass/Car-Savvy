import React from "react";
import store from "../../redux/store";
import { HEADER_MOVE } from "../../redux/reducers/types";

class OilChange extends React.Component {

  componentDidMount () {
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

export default OilChange;
