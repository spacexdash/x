import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export const CrewCard = ( { crew } ) => {
    const history = useHistory();

    return <Card>
        <Card.Body>
            <div className='row'>
                <div className='col'>
                    {crew.name}
                </div>
                <div className='col text-right'>
                    {crew.agency}
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <small className='text-muted'>Crew status: <strong>{crew.status}</strong></small>
                </div>
            </div>
            { crew.launches && crew.launches.length > 1 && <div className='row'>
                <div className='col'>
                <small>
                    <Button variant='link' className='ml-0 pl-0' onClick={() => history.push(`/crew/${crew.id}/launches`, { crew: crew })}>
                        <small>More SpaceX Launches from This Crew Member</small>
                    </Button>
                </small>
                </div>
            </div>}
        </Card.Body>
    </Card>
};