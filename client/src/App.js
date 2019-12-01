import React from 'react';
import Header from "../src/components/Header";

class App extends React.Component {

  render () {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <h4>CarSavvy</h4>
      </div>
    </div>
  );
  }
}

export default App;
