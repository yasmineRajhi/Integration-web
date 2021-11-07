import React, { Component } from 'react';
//import Mycars from './components/Mycars';
import Star from './components/Star';
//import Header from './components/Header';
//import './App.css';

class App extends Component {

  render() {
  return (
  
     
      <div style={{display: 'flex'}}>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
      </div>

  );
}
}

export default App;

