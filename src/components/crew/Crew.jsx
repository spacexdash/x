import React from 'react';
import {MainLayout} from '../layout/MainLayout'
import {useState, useEffect} from 'react';
import { getAllCrew } from '../../service/SpaceXApi';
import { Card } from 'react-bootstrap';
import { CrewSearchResult } from './CrewSearchResult';

const load = (crew, setCrew) => {
    if(crew.isLoading || crew.hasLoaded) return;
    setCrew({ ...crew, isLoading: true });
    return getAllCrew()
        .then((r) => setCrew({ hasLoaded: true, isLoading: false, error: null, data: r}))
        .catch((e) => setCrew({ hasLoaded: true, isLoading: false, error: e, data: crew.data }));
};
export const Crew = () => {
    const [crew, setCrew] = useState({ isLoading: false, hasLoaded: false, error: null, data: { docs: [] }});
    useEffect(() => load(crew, setCrew));

    return <MainLayout>
        <Card className='mt-3'>
            <Card.Body>
                <Card.Title>Cores</Card.Title>
                <ul className="list-group">
                    {crew.data.docs.map((crew) => <CrewSearchResult key={crew.id} crew={crew} /> )}
                </ul>
            </Card.Body>
        </Card>
    </MainLayout>
};