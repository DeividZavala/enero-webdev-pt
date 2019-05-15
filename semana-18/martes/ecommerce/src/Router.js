import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NewProduct from './components/NewProduct';

const Router = ({handleChange, product, handleSubmit}) => (
    <Switch>
        <Route exact path="/" component={()=> <h1>home</h1>} />
        <Route path="/new-product" render={(props) => <NewProduct handleSubmit={handleSubmit} {...props} handleChange={handleChange} {...product} />} />
    </Switch>
)

export default Router;