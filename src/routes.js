import React from "react";
import {Route, Switch} from 'react-router-dom';
import { Cores } from "./components/cores/Cores";
import {HomePage} from './components/home/HomePage'
import { Launches } from "./components/launches/Launches";
import {LaunchPage} from './components/launches/LaunchPage';
import { Rockets } from "./components/rocket/Rockets";
import {Launchpads} from './components/launchpad/Launchpads';
    
// Currently have to stick /x/ in front of everything for GH pages.
const routes = (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/x" component={HomePage} />
        <Route exact path="/launch/:launchId" component={LaunchPage} />
        <Route exact path="/x/launch/:launchId" component={LaunchPage} />
        <Route exact path="/x/core/:id/launches" component={Launches} />
        <Route exact path="/x/ship/:id/launches" component={Launches} />
        <Route exact path="/x/crew/:id/launches" component={Launches} />
        <Route exact path="/x/rocket/:id/launches" component={Launches} />
        <Route exact path="/x/launchpad/:id/launches" component={Launches} />
        <Route exact path="/x/launches/upcoming" component={Launches} />
        <Route exact path="/x/launches/past" component={Launches} />
        <Route exact path="/x/launches/all" component={Launches} />
        <Route exact path="/x/rockets/all" component={Rockets} />
        <Route exact path="/x/cores/all" component={Cores} />
        <Route exact path="/x/launchpad/all" component={Launchpads} />
    </Switch>
)

export default routes