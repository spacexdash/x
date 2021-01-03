import React from 'react';
import { Card } from 'react-bootstrap';

export const ShipCard = ({ ship }) => {
    return <Card>
        <Card.Body>
            <div className='row'>
                <div className='col-sm-12 col-md-6'>
                    {ship.name}
                </div>
                <div className='col-sm-12 col-md-6 text-sm-left text-md-right'>
                    {ship.type}
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-12'>
                    <small>Mission Roles: {ship.roles.join(', ')}</small>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-12'>
                    <small>Home: {ship.home_port}</small>
                </div>
            </div>
        </Card.Body>
    </Card>
}