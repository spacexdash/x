import {React, useEffect, useState} from 'react';
import {MainLayout} from '../layout/MainLayout';
import { useLocation, useParams } from 'react-router-dom';
import { LAUNCHES_CORE, LAUNCHES_PAST, LAUNCHES_SHIP, LAUNCHES_UPCOMING } from './LaunchConsts';
import { getCore, getLaunches, getShip, getUpcomingLaunches, getPastLaunches } from '../../service/SpaceXApi';
import {LaunchCardRow } from './LaunchCardRow';
import { Card } from 'react-bootstrap';

// If we land on a route without state, we have to fetch first the obj before fetching actual launch data.
const loadWithPreReq = (id, ctx, setLaunches) => {
    switch(ctx) {
        case LAUNCHES_CORE:
            return getCore(id)
                .then((res) => loadLaunchesFromIds(res.launches, setLaunches))
        case LAUNCHES_SHIP:
            return getShip(id)
                .then((res) => loadLaunchesFromIds(res.launches, setLaunches))
        case LAUNCHES_UPCOMING:
            return getUpcomingLaunches()
                .then((d) => setLaunches({ isLoading: false, hasLoaded: true, data: d }));
        case LAUNCHES_PAST:
            return getPastLaunches()
                .then((d) => setLaunches({ isLoading: false, hasLoaded: true, data: d }));
        default:
            break;
    }
};

const loadLaunchesFromIds = (launchIds, setLaunches) => {
    return getLaunches(launchIds)
        .then((d) => setLaunches({ isLoading: false, hasLoaded: true, error: null, data: d}));
}

const load = (id, ctx, location, launches, setLaunches) => {
    if (launches.hasLoaded || launches.isLoading) return;

    const hasState = (location.state);
    const hasPreReq = (hasState && "launches" in location.state[ctx]);
    setLaunches({ ...launches, isLoading: true });
    if (!hasPreReq) {
        return loadWithPreReq(id, ctx, setLaunches)
            .catch((e) => setLaunches({ ...launches, isLoading: false, hasLoaded: true, error: e }));
    } else {
        return loadLaunchesFromIds(location.state[ctx].launches, setLaunches)
            .catch((e) => setLaunches({ ...launches, isLoading: false, hasLoaded: true, error: e }));
    }
};

const getLaunchesContext = (location) => {
    // should probably map over an array here.
    if (location.pathname.includes(LAUNCHES_CORE)) {
        return LAUNCHES_CORE;
    } else if (location.pathname.includes(LAUNCHES_SHIP)) {
        return LAUNCHES_SHIP;
    } else if (location.pathname.includes(LAUNCHES_UPCOMING)) {
        return LAUNCHES_UPCOMING;
    } else if (location.pathname.includes(LAUNCHES_PAST)) {
        return LAUNCHES_PAST;
    }
}

export const Launches = () => {
    const location = useLocation();
    const { id } = useParams();
    const [launches, setLaunches] = useState({ data: { docs: [] }, hasLoaded: false, isLoading: false, error: null });
    const launchCtx = getLaunchesContext(location);
    useEffect(() => load(id, launchCtx, location, launches, setLaunches));
    return <MainLayout>
        <Card>
            <Card.Body>
                <Card.Title>{'Launches'}</Card.Title>
                {launches.data.docs.map((launch) => <LaunchCardRow key={launch.id} launch={launch} />)}
            </Card.Body>
        </Card>
    </MainLayout>
};