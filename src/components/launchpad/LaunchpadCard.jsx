import React, { useState, useEffect } from 'react';
import { Card,Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import {getRockets} from '../../service/SpaceXApi';

const loadRockets = (ids, rockets, setRockets) => {
    if (rockets.hasLoaded) return null;
    return getRockets(ids)
        .then((d) => setRockets({ hasLoaded: true, data: d, error: null }))
        .catch((e) => setRockets({ data: {}, hasLoaded: true, error: e }));
};

export const LaunchpadCard = ({ launchpad }) => {
    const history = useHistory();
    const [rockets, setRockets] = useState({ data: {}, hasLoaded: false, error: null });
    const canDisplayRocketInfo = (rockets.hasLoaded && !rockets.error && rockets.data.docs.length > 0);
    useEffect(() => loadRockets(launchpad.rockets, rockets, setRockets));

    return <Card>
        <Card.Body>
            <div className='row'>
                <div className='col'>
                    {launchpad.name}
                </div>
                <div className='col text-right'>
                    {launchpad.region}
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <small className='text-muted'>{launchpad.full_name}</small>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <small className='text-muted'><p>{launchpad.details}</p></small>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <small className='text-muted'>Latitude: {launchpad.latitude}</small>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <small className='text-muted'>Longitude: {launchpad.longitude}</small>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <small className='text-muted'>Status: <strong>{launchpad.status}</strong></small>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    {canDisplayRocketInfo && 
                    <small className='text-muted'>
                        This launchpad supports launches for <strong>{rockets.data.docs.map((rocket) => rocket.name).join(', ')}</strong>
                    </small>}
                </div>
            </div>
            {<div className='row'>
                <div className='col'>
                <small>
                    <Button variant='link' className='ml-0 pl-0' onClick={() => history.push(`/x/launchpad/${launchpad.id}/launches`, { launchpad: launchpad })}>
                        <small>More Launches from This Pad</small>
                    </Button>
                </small>
                </div>
            </div>}
        </Card.Body>
    </Card>
};