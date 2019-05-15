import React from 'react';
import {Switch, Route} from 'react-router-dom';

const Router = () => (
    <Switch>
        <Route exact path="/" component={()=> <h1>home</h1>} />
        <Route path="/new-product" component={()=> <h1>form</h1>} />
    </Switch>
)

export default Router;