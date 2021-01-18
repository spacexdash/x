import React from 'react';
import {MainLayout} from '../layout/MainLayout'
import {useState, useEffect} from 'react';
import { getAllLaunchpads } from '../../service/SpaceXApi';
import { Card } from 'react-bootstrap';
import { LaunchpadSearchResult } from './LaunchpadSearchResult';

const load = (launchpads, setLaunchpads) => {
    if(launchpads.isLoading || launchpads.hasLoaded) return;
    setLaunchpads({ ...launchpads, isLoading: true });
    return getAllLaunchpads()
        .then((r) => setLaunchpads({ hasLoaded: true, isLoading: false, error: null, data: r}))
        .catch((e) => setLaunchpads({ hasLoaded: true, isLoading: false, error: e, data: launchpads }));
};
export const Launchpads = () => {
    const [launchpads, setLaunchpads] = useState({ isLoading: false, hasLoaded: false, error: null, data: [] });
    useEffect(() => load(launchpads, setLaunchpads));

    return <MainLayout>
        <Card className='mt-3'>
            <Card.Body>
                <Card.Title>Launchpads</Card.Title>
                <ul className="list-group">
                    {launchpads.data.map((launchpad) => <LaunchpadSearchResult key={launchpad.id} launchpad={launchpad} /> )}
                </ul>
            </Card.Body>
        </Card>
    </MainLayout>
};