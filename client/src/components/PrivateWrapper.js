import React, { PureComponent } from "react";
import PrivateRoute from "./PrivateRoute";
// import store from "../redux/store";
import { connect } from "react-redux";
import auth from "../utilities/auth";
// import { VERIFY_DATA } from "../redux/reducers/types";

class PrivateWrapper extends PureComponent {

 async componentDidMount() {

  await auth.verifyAuth();

  console.log(this.props);
  
  }

   render() {
    const verify = this.props.verify;    
    console.log(verify);
    return (<PrivateRoute data={verify}></PrivateRoute>)
  }
}

const mapStateToProps = state => {
  const { user } = state;
  return {
    loadingAuth: user.loadingAuth,
    verify: user.verify
  };
};

export default connect(mapStateToProps)(PrivateWrapper);
