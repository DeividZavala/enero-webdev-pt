import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomeComponentContainer from "./components/Home/HomeComponentContainer";

const Router = () => (
    <Switch>
        <Route exact path="/" component={HomeComponentContainer} />
    </Switch>
)

export default Router;