import React, {Component} from 'react';
import Router from './Router';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <nav>
          <a href="/">Home</a>
          <a href="/new-product">New product</a>
        </nav>
        <Router/>
      </div>
    );
  }
}

export default App;
