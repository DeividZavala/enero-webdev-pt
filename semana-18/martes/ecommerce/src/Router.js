import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NewProduct from './components/NewProduct';
import ListProducts from './components/ListProducts';

const Router = ({handleChange, product, handleSubmit, products}) => (
    <Switch>
        <Route exact path="/" render={()=> <ListProducts products={products} />} />
        <Route path="/new-product" render={(props) => <NewProduct handleSubmit={handleSubmit} {...props} handleChange={handleChange} {...product} />} />
    </Switch>
)

export default Router;