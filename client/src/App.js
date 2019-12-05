import React from "react";
import Header from "../src/components/Header";
import Title from "../src/components/pages/Title";
import Login from "../src/components/pages/Login";
import CreateAccount from "../src/components/pages/CreateAccount";
import OilChange from "../src/components/pages/OilChange";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
              <Route path="/splash">
                <Title/>
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/createAccount">
                <CreateAccount />
              </Route>
              <Route path="/oilchange">
                <OilChange/>
              </Route>
              <Route path="/oilchange">
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
