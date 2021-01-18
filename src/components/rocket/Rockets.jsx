import React from 'react';
import {MainLayout} from '../layout/MainLayout'
import {useState, useEffect} from 'react';
import { getAllRockets } from '../../service/SpaceXApi';
import { Card } from 'react-bootstrap';
import { RocketInfoCard } from './RocketInfoCard';
import { RocketSearchResult } from './RocketSearchResult';

const load = (rockets, setRockets) => {
    if(rockets.isLoading || rockets.hasLoaded) return;
    setRockets({ ...rockets, isLoading: true });
    return getAllRockets()
        .then((r) => setRockets({ hasLoaded: true, isLoading: false, error: null, data: r}))
        .catch((e) => setRockets({ hasLoaded: true, isLoading: false, error: e, data: rockets.data }));
};
export const Rockets = () => {
    const [rockets, setRockets] = useState({ isLoading: false, hasLoaded: false, error: null, data: []});
    useEffect(() => load(rockets, setRockets));

    return <MainLayout>
        <Card className='mt-3'>
            <Card.Body>
                <Card.Title>Rockets</Card.Title>
                <ul className="list-group">
                    {rockets.data.map((rocket) => <RocketSearchResult key={rocket.id} rocket={rocket} /> )}
                </ul>
            </Card.Body>
        </Card>
    </MainLayout>
};