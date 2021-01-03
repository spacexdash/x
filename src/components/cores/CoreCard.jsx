import React from 'react';
import { Card } from 'react-bootstrap';
import { LandingIndicators } from '../launches/LaunchIndicators';
// todo - find a way to get the booster serial
export const CoreCard = ({ core, index }) => {
    return <Card>
        <Card.Body>
            <div className='row'>
                <div className='col-sm-12 col-md-6'>
                    Booster {index + 1}
                </div>
                <div className='col-sm-12 col-md-6 text-sm-left text-md-right'>
                    <LandingIndicators cores={[core]} />
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <small className='text-muted'>{core.landing_attempt && core.landing_attempt !== null &&  core.landing_type}</small>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <small className='text-muted'>Flights: {core.flight}</small>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <small className='text-muted'>ID: {core.core}</small>
                </div>
            </div>
        </Card.Body>
    </Card>
}