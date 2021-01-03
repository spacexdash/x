import React from 'react';
import {Card} from 'react-bootstrap';

export const RocketGeometryCard = ({ rocket }) => {
    return <Card>
        <Card.Body>
            <div className='row'>
                <div className='col'>
                    Geometry
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-12 col-md-6'>
                    <small className='text-muted'>Height {rocket.height.meters} M</small>
                </div>
                <div className='col-sm-12 col-md-6 text-sm-left text-md-right'>
                    <small className='text-muted'>Diameter {rocket.diameter.meters} M</small>
                </div>
            </div>
        </Card.Body>
    </Card>
}