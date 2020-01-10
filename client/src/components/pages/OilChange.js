import React from "react";
import store from "../../redux/store";
import { HEADER_MOVE } from "../../redux/reducers/types";
import auth from "../../utilities/auth";

class OilChange extends React.Component {

  componentDidMount () {

    console.log(auth.isAuth);

    auth.checkAuth();

    store.dispatch({
      type: HEADER_MOVE,
      action: false
    });
  };

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
