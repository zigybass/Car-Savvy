import React from "react";
import Header from "../src/components/Header";
import Title from "../src/components/pages/Title";
import OilChange from "../src/components/pages/OilChange";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../src/components/css/style.scss";

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container mainApp">
            <Header />

  
            <Switch>
              <Route path="/splash">
                <Title/>
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
    );
  }
}

export default App;
