import React from "react";
import {Route, Switch} from 'react-router-dom';
import {HomePage} from './components/home/HomePage'
import { Launches } from "./components/launches/Launches";
import {LaunchPage} from './components/launches/LaunchPage';

const routes = (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/launch/:launchId" component={LaunchPage} />
        <Route exact path="/launch/:launchId" component={LaunchPage} />
        <Route exact path="/core/:id/launches" component={Launches} />
        <Route exact path="/ship/:id/launches" component={Launches} />
        <Route exact path="/crew/:id/launches" component={Launches} />
        <Route exact path="/launchpad/:id/launches" component={Launches} />
        <Route exact path="/launches/upcoming" component={Launches} />
        <Route exact path="/launches/past" component={Launches} />
    </Switch>
)

export default routes