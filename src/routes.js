import React from "react";
import {Route, Switch} from 'react-router-dom';
import {HomePage} from './components/home/HomePage'
import { Launches } from "./components/launches/Launches";
import {LaunchPage} from './components/launches/LaunchPage';

// Currently have to stick /x/ in front of everything for GH pages.
const routes = (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/x" component={HomePage} />
        <Route exact path="/launch/:launchId" component={LaunchPage} />
        <Route exact path="/x/launch/:launchId" component={LaunchPage} />
        <Route exact path="/x/core/:id/launches" component={Launches} />
        <Route exact path="/x/ship/:id/launches" component={Launches} />
    </Switch>
)

export default routes