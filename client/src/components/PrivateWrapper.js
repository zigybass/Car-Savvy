import React, { PureComponent } from "react";
import PrivateRoute from "./PrivateRoute";
import auth from "../utilities/auth";
import store from "../redux/store";
import { connect } from "react-redux";
import { VERIFY_DATA } from "../redux/reducers/types";

class PrivateWrapper extends PureComponent {

  async componentDidMount() {
    console.log(this.props);
    const validate = await auth.verifyAuth();
    console.log(validate);
    store.dispatch({
      type: VERIFY_DATA,
      action: validate
    });
  }

  render() {
    const {verify} = this.props;

    console.log(verify);

    return (
        <PrivateRoute data={verify}></PrivateRoute>
    )
  }
}

const mapStateToProps = state => {
  const { user } = state;
  return {
    verify: user.verify
  };
};

export default connect(mapStateToProps)(PrivateWrapper);
