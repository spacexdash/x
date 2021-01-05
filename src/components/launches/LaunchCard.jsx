import React, { useEffect, useState } from 'react';
import { Card, Button} from 'react-bootstrap';
import { LAUNCH_DATA_TYPE_PAST, LAUNCH_DATA_TYPE_UPCOMING } from './LaunchConsts';
import { getUpcomingLaunches, getPastLaunches } from '../../service/SpaceXApi';
import {LaunchCardRow } from './LaunchCardRow';
import { useHistory } from 'react-router-dom';

const LIMIT = 7;

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

const getMoreUrl = (type) => {
    switch(type) {
        case LAUNCH_DATA_TYPE_PAST:
            return `/x/launches/past`;
        case LAUNCH_DATA_TYPE_UPCOMING:
            return `/x/launches/upcoming`;
        default:
            return '/'
    }
}
const getData = (type) => {
    switch(type) {
        case LAUNCH_DATA_TYPE_PAST:
            return getPastLaunches(LIMIT);
        case LAUNCH_DATA_TYPE_UPCOMING:
            return getUpcomingLaunches(LIMIT);
        default:
            return Promise.resolve([]);
    }
};

const loadCard = (type, launchData, setLaunchData) => {
    if (launchData.hasLoaded || launchData.isLoading) {
        return;
    }
    setLaunchData({ ...launchData, isLoading: true });
    return getData(type).then((data) => {
        setLaunchData({ ...launchData, isLoading: false, hasLoaded: true, data: data });
    }).catch((e) => {
        console.error(e);
        setLaunchData({ ...launchData, isLoading: false, hasLoaded: true, error: e });
    });
}
export const LaunchCard = (props) => {
    const history = useHistory();
    const { type } = props;
    const [launchData, setLaunchData] = useState({ data: { totalDocs: 0, docs: [] }, hasLoaded: false, isLoading: false, error: null });
    useEffect(() => loadCard( type, launchData, setLaunchData));

    return <Card>
        <Card.Body>
            <Card.Title>{getTitle(type)}</Card.Title>
            <ul className="list-group">
                {launchData.data.docs.map((launch) => <LaunchCardRow key={launch.id} launch={launch} />) }
            </ul>
            {launchData.data.totalDocs > LIMIT && 
                <Button onClick={() => history.push(getMoreUrl(type))} className='ml-1 pl-0 mt-2' variant='link'>
                    View {launchData.data.totalDocs - LIMIT} more</Button>}
        </Card.Body>
    </Card>
}