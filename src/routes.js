import React from "react";
import {Route, Switch} from 'react-router-dom';
import {HomePage} from './components/home/HomePage'
import {LaunchPage} from './components/launches/LaunchPage';

const routes = (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/x" component={HomePage} />
        <Route exact path="/launch/:launchId" component={LaunchPage} />
        <Route exact path="/x/launch/:launchId" component={LaunchPage} />
    </Switch>
)

export default routes