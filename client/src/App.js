import React from "react";
import Header from "../src/components/Header";
import Title from "../src/components/pages/Title";
import Login from "../src/components/pages/Login";
import Sorry from "../src/components/pages/Sorry";
import CreateAccount from "../src/components/pages/CreateAccount";
import Menu from "../src/components/pages/Menu";
import OilChange from "../src/components/pages/OilChange";
import FindCar from "../src/components/pages/FindCar";
import TireRotation from "../src/components/pages/TireRotation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Protected from "./components/pages/Protected";
import PrivateRoute from "./components/PrivateRoute";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import "../src/components/css/style.css";

class App extends React.Component {
  // componentDidUpdate () {
  //   console.log(store.getState());
  // }

  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
            <Header />
            <div className="container mainApp">
              <Switch>
                <Route exact path="/">
                  <Title />
                </Route>
                <Route path="/login">
                  <Login id="loginComp" />
                </Route>
                <Route path="/createAccount">
                  <CreateAccount />
                </Route>
                <Route path="/menu">
                  <Title />
                  <Menu />
                </Route>
                <Route path="/oilChange">
                  <OilChange />
                </Route>
                <Route path="/tireRotation">
                  <TireRotation />
                </Route>
                <Route path="/oilchange"></Route>
                <Route path="/findCar">
                  <FindCar />
                </Route>
                <Route>
                  <Sorry />
                </Route>
                <PrivateRoute exact path="/protected" component={Protected} />
              </Switch>
            </div>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
