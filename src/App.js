import React, { Component } from 'react';
import Header from './Components/Header/Header.js'
import MainContent from './Components/MainContent/MainContent.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <MainContent />
      </div>
    );
  }
}

export default App;
