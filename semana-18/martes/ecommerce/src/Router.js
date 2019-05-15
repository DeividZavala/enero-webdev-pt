import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NewProduct from './components/NewProduct';

const Router = ({handleChange, product}) => (
    <Switch>
        <Route exact path="/" component={()=> <h1>home</h1>} />
        <Route path="/new-product" component={(props) => <NewProduct {...props} handleChange={handleChange} {...product} />} />
    </Switch>
)

export default Router;