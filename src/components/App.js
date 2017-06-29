import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import VisibleRooms from '../containers/VisibleRooms'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <VisibleRooms/>
      </div>
    );
  }
}

export default App;
