import { React, useEffect, useState } from 'react';
import { MainLayout } from '../layout/MainLayout';
import { useLocation, useParams } from 'react-router-dom';
import { LAUNCHES_CORE, LAUNCHES_CREW, LAUNCHES_LAUNCHPAD, LAUNCHES_PAST, LAUNCHES_SHIP, LAUNCHES_UPCOMING, LAUNCHES_ROCKET } from './LaunchConsts';
import { getCore, getLaunches, getShip, getUpcomingLaunches, getPastLaunches, getCrew, getLaunchpad, getLaunchesByRocket } from '../../service/SpaceXApi';
import { LaunchCardRow } from './LaunchCardRow';
import { Card, Button } from 'react-bootstrap';
import { Loader } from 'react-bootstrap-typeahead';

// lol pls refactor
const loadWithPreReq = (id, ctx, setLaunches, launches, page) => {
    console.log('Loading via pre-reqs', launches);
    switch (ctx) {
        case LAUNCHES_CORE:
            return getCore(id)
                .then((res) => loadLaunchesFromIds(res.launches, setLaunches, launches, page))
        case LAUNCHES_SHIP:
            return getShip(id)
                .then((res) => loadLaunchesFromIds(res.launches, setLaunches, launches, page))
        case LAUNCHES_CREW:
            return getCrew(id)
                .then((res) => loadLaunchesFromIds(res.launches, setLaunches, launches, page))
        case LAUNCHES_LAUNCHPAD:
            return getLaunchpad(id)
                .then((res) => loadLaunchesFromIds(res.launches, setLaunches, launches, page))
        case LAUNCHES_ROCKET:
            return getLaunchesByRocket(id, page)
                .then((d) => setLaunches({ isLoading: false, hasLoaded: true, data: { ...launches.data, ...d, docs: [...launches.data.docs, ...d.docs] } }));
        case LAUNCHES_UPCOMING:
            return getUpcomingLaunches(page)
                .then((d) => setLaunches({ isLoading: false, hasLoaded: true, data: { ...launches.data, ...d, docs: [...launches.data.docs, ...d.docs] } }));
        case LAUNCHES_PAST:
            return getPastLaunches(page)
                .then((d) => setLaunches({ isLoading: false, hasLoaded: true, data: { ...launches.data, ...d, docs: [...launches.data.docs, ...d.docs] } }));
        default:
            break;
    }
};

const loadLaunchesFromIds = (launchIds, setLaunches, launches, page) => {
    return getLaunches(launchIds, page)
        .then((d) => setLaunches({ isLoading: false, hasLoaded: true, error: null, data: { ...launches.data, ...d, docs: [...launches.data.docs, ...d.docs] } }));
}

const load = (id, ctx, location, launches, setLaunches) => {
    if (launches.hasLoaded || launches.isLoading) return;

    const hasState = (location.state);
    const hasPreReq = (hasState && "launches" in location.state[ctx]);
    const page = launches.data.page + 1;
    setLaunches({ ...launches, isLoading: true });
    if (!hasPreReq) {
        return loadWithPreReq(id, ctx, setLaunches, launches, page)
            .catch((e) => setLaunches({ ...launches, isLoading: false, hasLoaded: true, error: e }));
    } else {
        return loadLaunchesFromIds(location.state[ctx].launches, setLaunches, launches, page)
            .catch((e) => setLaunches({ ...launches, isLoading: false, hasLoaded: true, error: e }));
    }
};

const getLaunchesContext = (location) => {
    // todo - should probably map over an array here.
    if (location.pathname.includes(LAUNCHES_CORE)) {
        return LAUNCHES_CORE;
    } else if (location.pathname.includes(LAUNCHES_SHIP)) {
        return LAUNCHES_SHIP;
    } else if (location.pathname.includes(LAUNCHES_UPCOMING)) {
        return LAUNCHES_UPCOMING;
    } else if (location.pathname.includes(LAUNCHES_PAST)) {
        return LAUNCHES_PAST;
    } else if (location.pathname.includes(LAUNCHES_CREW)) {
        return LAUNCHES_CREW;
    } else if (location.pathname.includes(LAUNCHES_LAUNCHPAD)) {
        return LAUNCHES_LAUNCHPAD;
    } else if (location.pathname.includes(LAUNCHES_ROCKET)) {
        return LAUNCHES_ROCKET;
    }
}

export const Launches = () => {
    const location = useLocation();
    const { id } = useParams();
    const [launches, setLaunches] = useState({ data: { docs: [], page: 0, totalPages: 2 }, hasLoaded: false, isLoading: false, error: null });
    const launchCtx = getLaunchesContext(location);
    useEffect(() => load(id, launchCtx, location, launches, setLaunches), [id, launchCtx, location, launches]);
    const allowMoreLoad = (!launches.isLoading && launches.data.page < launches.data.totalPages);
    return <MainLayout>
        <Card className='mt-3'>
            <Card.Body>
                <Card.Title>{'Launches'}</Card.Title>
                {launches.data.docs.map((launch) => <LaunchCardRow key={launch.id} launch={launch} />)}
                <div className='mt-3'>
                    {allowMoreLoad && <Button variant='link' onClick={() => {
                        setLaunches({ ...launches, hasLoaded: false });
                    }}>More</Button>}
                    {launches.isLoading && <Loader />}
                </div>
            </Card.Body>
        </Card>
    </MainLayout>
};