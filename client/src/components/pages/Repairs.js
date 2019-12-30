import React from "react";
import store from "../../redux/store";
import { HEADER_MOVE } from "../../redux/reducers/types";

class Repairs extends React.Component {

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
        <h4 className="repairs">Repairs Page</h4>
      </div>
    </div>
  );
}
}

export default Repairs;
