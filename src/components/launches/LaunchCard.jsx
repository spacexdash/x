import React, { useEffect, useState } from 'react';
import { Card, Button} from 'react-bootstrap';
import { LAUNCH_DATA_TYPE_PAST, LAUNCH_DATA_TYPE_UPCOMING } from './LaunchConsts';
import { getUpcomingLaunches, getPastLaunches } from '../../service/SpaceXApi';
import {LaunchCardRow } from './LaunchCardRow';

const MAX_ITEMS = 7;

const getTitle = (type) => {
    switch(type) {
        case LAUNCH_DATA_TYPE_PAST:
            return "Previous Launches";
        case LAUNCH_DATA_TYPE_UPCOMING:
            return "Upcoming Launches";
        default:
            return "Ooops something has gone wrong"
    }
};
const getData = (type) => {
    switch(type) {
        case LAUNCH_DATA_TYPE_PAST:
            return getPastLaunches();
        case LAUNCH_DATA_TYPE_UPCOMING:
            return getUpcomingLaunches();
        default:
            return Promise.resolve([]);
    }
};

const loadCard = (opts) => {
    const { type, hasLoaded, setHasLoaded, setLaunchData } = opts;
    if (hasLoaded) {
        return;
    }
    return getData(type).then((data) => {
        setLaunchData(data.docs);
        setHasLoaded(true)
    }).catch((e) => {
        console.error(e);
        setHasLoaded(true);
    });
}
export const LaunchCard = (props) => {
    const { type } = props;
    const [hasLoaded, setHasLoaded] = useState(false);
    const [launchData, setLaunchData] = useState([]);
    useEffect(() => loadCard({  type, hasLoaded, setLaunchData, setHasLoaded }), [hasLoaded, type]);

    return <Card>
        <Card.Body>
            <Card.Title>{getTitle(type)}</Card.Title>
            <ul className="list-group">
                {launchData.slice(0, MAX_ITEMS).map((launch) => <LaunchCardRow key={launch.id} launch={launch} />) }
            </ul>
            {launchData.length > MAX_ITEMS && <Button disabled className='ml-1 pl-0 mt-2' variant='link'>View {launchData.length - MAX_ITEMS} more</Button>}
        </Card.Body>
    </Card>
}