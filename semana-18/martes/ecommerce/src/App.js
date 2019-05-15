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
    const {product} = this.state;
    let field = e.target.name;
    if(field === "images") {
      let images =  e.target.value.split(',')
      product[field] = images
      return this.setState({product});
    }
    product[field] = e.target.value;
    this.setState({product});
  }

  handleSubmit = e => {
    e.preventDefault();
    let {products, product} = this.state;
    products.push(product);
    product = {
      name: "",
      price: 0,
      description: "",
      images: []
    }
    this.setState({products, product})
  }

  render(){
    const {product, products} = this.state;
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/new-product">New product</Link>
          <p>Productos: {products.length}</p>
        </nav>
        <Router
          product={product}
          products={products}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
