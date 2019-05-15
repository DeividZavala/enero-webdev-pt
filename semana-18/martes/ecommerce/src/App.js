import React, {Component} from 'react';
import Router from './Router';
import {Link} from 'react-router-dom';
import './App.css';

class App extends Component {

  state = {
    product: {
      name: "",
      price: 0,
      description: "",
      images: []
    },
    products: []
  }

  render(){
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/new-product">New product</Link>
        </nav>
        <Router/>
      </div>
    );
  }
}

export default App;
