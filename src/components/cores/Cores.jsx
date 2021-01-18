import React from 'react';
import {MainLayout} from '../layout/MainLayout'
import {useState, useEffect} from 'react';
import { getAllCores } from '../../service/SpaceXApi';
import { Card } from 'react-bootstrap';
import { CoreSearchResult } from './CoreSearchResult';

const load = (cores, setCores) => {
    if(cores.isLoading || cores.hasLoaded) return;
    setCores({ ...cores, isLoading: true });
    return getAllCores()
        .then((r) => setCores({ hasLoaded: true, isLoading: false, error: null, data: r}))
        .catch((e) => setCores({ hasLoaded: true, isLoading: false, error: e, data: cores.data }));
};
export const Cores = () => {
    const [cores, setCores] = useState({ isLoading: false, hasLoaded: false, error: null, data: { docs: [] }});
    useEffect(() => load(cores, setCores));

    return <MainLayout>
        <Card className='mt-3'>
            <Card.Body>
                <Card.Title>Cores</Card.Title>
                <ul className="list-group">
                    {cores.data.docs.map((core) => <CoreSearchResult key={core.id} core={core} /> )}
                </ul>
            </Card.Body>
        </Card>
    </MainLayout>
};