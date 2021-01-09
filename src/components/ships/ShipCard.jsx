import React from 'react';
import { Card, Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const MoreLaunches = ({ ship }) => {
    const history = useHistory();
    const launchState = { ship: ship };
    return <small>
        <Button variant='link' className='ml-0 pl-0' onClick={() => history.push(`/ship/${ship.id}/launches`, launchState)}>
            <small>Other Launches That Used This Ship</small>
        </Button>
    </small>
};

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
            <div className='row'>
                <div className='col-sm-12'>
                    <MoreLaunches ship={ship} />
                </div>
            </div>
        </Card.Body>
    </Card>
}