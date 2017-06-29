import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Room from './Room'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Room name="Test Garage" temp="69° F"/>
      </div>
    );
  }
}

export default App;
