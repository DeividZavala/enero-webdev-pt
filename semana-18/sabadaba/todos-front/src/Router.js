import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import AuthFormContainer from './components/auth/AuthContainer';

const Router = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={AuthFormContainer} />
        <Route exact path="/register" component={AuthFormContainer} />
    </Switch>
)

export default Router;