import React from "react";
import store from "../../redux/store";
import { HEADER_MOVE } from "../../redux/reducers/types";

class Parts extends React.Component {

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
        <h4 className="parts">Parts Page</h4>
      </div>
    </div>
  );
}
}

export default Parts;
