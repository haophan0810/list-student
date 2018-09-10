import React, { Component } from 'react';
import Header from './Components/Header/Header.js'
import MainContent from './Components/MainContent/MainContent.js';
import './App.css';
import Test from './Components/Test.js';

class App extends Component {

  
  componentWillMount() {
    console.log("app");
  }
  

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
