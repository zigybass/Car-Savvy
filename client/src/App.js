import React from 'react';
import Header from "../src/components/Header";
import { Router as BrowserRouter } from "react-router-dom";

class App extends React.Component {

  render () {
  return (
    <div className="App">
      <Header />
      <div className="container">
      </div>
    </div>
  );
  }
}

export default App;
