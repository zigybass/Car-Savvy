import React from "react";
import Header from "../src/components/Header";
import Splash from "../src/components/pages/Splash";
import Menu from "../src/components/pages/Menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../src/components/css/style.css";

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Switch>
              <Route path="/splash">
                <Splash/>
              </Route>
              <Route path="/menu">
                <Menu/>
              </Route>
              <Route path="/oilchange">
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
