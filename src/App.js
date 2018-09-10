import React, { Component } from 'react';
import Header from './Components/Header/Header.js'
import MainContent from './Components/MainContent/MainContent.js';
import './App.css';
import Test from './Components/Test.js';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <MainContent />
       <Test />
      </div>
    );
  }
}

export default App;
