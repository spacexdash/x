import { React } from 'react';
import { Card } from 'react-bootstrap';

export const RocketInfoCard = ({ rocket }) => {
    return <Card>
        <Card.Body>
            <div className='row'>
                <div className='col'>
                    {rocket.name}
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <small className='text-muted'>{rocket.description}</small>
                </div>
            </div>
        </Card.Body>
    </Card>
}