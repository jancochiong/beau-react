import React, { Component } from 'react';
import './App.css';
import BeerApp from './containers/BeerApp/BeerApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BeerApp/>
      </div>
    );
  }
}

export default App;
