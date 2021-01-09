import { React } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export const RocketInfoCard = ({ rocket }) => {
    const history = useHistory();

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
            <div className='row'>
                <div className='col'>
                    <small>
                        <Button variant='link' className='ml-0 pl-0' onClick={() => history.push(`/x/rocket/${rocket.id}/launches`, { rocket: rocket })}>
                            <small>More Launches From This Rocket</small>
                        </Button>
                    </small>
                </div>
            </div>
        </Card.Body>
    </Card>
}