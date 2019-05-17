import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomeComponentContainer from "./components/Home/HomeComponentContainer";
import DetailContainer from './components/Detail/DetailContainer';

const Router = () => (
    <Switch>
        <Route exact path="/" component={HomeComponentContainer} />
        <Route exact path="/detail/:id" component={DetailContainer} />
    </Switch>
)

export default Router;