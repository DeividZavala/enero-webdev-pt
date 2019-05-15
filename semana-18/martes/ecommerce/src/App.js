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

  handleChange = e => {
    console.log(e.target.value)
  }

  render(){
    const {product} = this.state;
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/new-product">New product</Link>
        </nav>
        <Router
          product={product}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
