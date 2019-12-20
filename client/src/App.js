import React from "react";
import Header from "../src/components/Header";
import Title from "../src/components/pages/Title";
import Login from "../src/components/pages/Login";
import Sorry from "../src/components/pages/Sorry";
import CreateAccount from "../src/components/pages/CreateAccount";
import Menu from "../src/components/pages/Menu";
import OilChange from "../src/components/pages/OilChange";
import TireRotation from "../src/components/pages/TireRotation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import "../src/components/css/style.scss";

class App extends React.Component {


  componentDidUpdate () {
    console.log(store.getState());
  }

  render() {

    // const { display } = store.getState();
    // let style = {
    //   animation: "navSlide 1.4s ease-in"
    // }

    // if ( display.headerOpen === false ) {
    //   style = "navSlideOut 1.2s ease-in"
    // }

    return (
      <Provider store={store}>
        <Router>
          <div className="App">
          <Header/>
            <div className="container mainApp">

              <Switch>
                <Route exact path="/">  
                  <Title />
                </Route>
                <Route path="/login">
                  <Login />
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
