import React from "react";
import Header from "../src/components/Header";
import Title from "../src/components/pages/Title";
import Login from "../src/components/pages/Login";
import Sorry from "../src/components/pages/Sorry";
import CreateAccount from "../src/components/pages/CreateAccount";
import Menu from "../src/components/pages/Menu";
import Button from "./components/Button";
import OilChange from "../src/components/pages/OilChange";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import "../src/components/css/style.scss";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div className="container mainApp">
              <Header />

              <Switch>
                <Route exact path="/">
                  <Title />
                  <Link to="/login">
                    <Button name="Login" />
                  </Link>
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/createAccount">
                  <CreateAccount />
                </Route>
                <Route path="/menu">
                  <Menu />
                </Route>
                <Route path="/oilchange">
                  <OilChange />
                </Route>
                <Route path="/oilchange"></Route>
                <Route>
                  <Sorry />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
