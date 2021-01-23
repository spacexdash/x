import React from 'react';
import {MainLayout} from '../layout/MainLayout'
import {useState, useEffect} from 'react';
import { getAllShips } from '../../service/SpaceXApi';
import { Card } from 'react-bootstrap';
import { ShipSearchResult } from './ShipSearchResult';

const load = (ships, setShips) => {
    if(ships.isLoading || ships.hasLoaded) return;
    setShips({ ...ships, isLoading: true });
    return getAllShips()
        .then((r) => setShips({ hasLoaded: true, isLoading: false, error: null, data: r}))
        .catch((e) => setShips({ hasLoaded: true, isLoading: false, error: e, data: ships.data }));
};
export const Ships = () => {
    const [ships, setShips] = useState({ isLoading: false, hasLoaded: false, error: null, data: { docs: [] }});
    useEffect(() => load(ships, setShips));

    return <MainLayout>
        <Card className='mt-3'>
            <Card.Body>
                <Card.Title>Ships</Card.Title>
                <ul className="list-group">
                    {ships.data.docs.map((ship) => <ShipSearchResult key={ship.id} ship={ship} /> )}
                </ul>
            </Card.Body>
        </Card>
    </MainLayout>
};