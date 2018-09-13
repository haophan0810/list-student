import React, { Component } from 'react';
import Header from './Components/Header/Header.js'
import MainContent from './Components/MainContent/MainContent.js';
import './App.css';
import dataStudent from './DataStudent.json';


class App extends Component {
constructor(props) {
  super(props);
  this.state={
    data: ''
  }
}

  
  componentWillMount() {
    console.log('App');
    if (localStorage.getItem('dataStorage')===null){
        localStorage.setItem('dataStorage',JSON.stringify(dataStudent));
    }else {
    const temp =JSON.parse(localStorage.getItem('dataStorage'));
    // console.log('temp :', temp);
      this.setState({
        data:temp
      })
    }
  }
  
  addNewUser= (newStudent) => {
    let temp =JSON.parse(localStorage.getItem('dataStorage'));
    // console.log('newStudent :', newStudent);
    temp.push(newStudent);
    localStorage.setItem('dataStorage',JSON.stringify(temp));
    this.setState({
    data: JSON.parse(localStorage.getItem('dataStorage'))

    })
    // console.log('temp :', temp);
  }

  render() {
    // console.log('this.state.data :', this.state.data);
    return (
      <div className="App">
       <Header />
       <MainContent dataStudent = {JSON.parse(localStorage.getItem('dataStorage'))} addNewUser={this.addNewUser} />
       
      </div>
    );
  }
}

export default App;
