import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export const CrewSearchResult = ({ crew }) => {
    const history = useHistory();

    return <li className={`list-group-item search-result`} onClick={(e) => history.push(`/x/crew/${crew.id}/launches`, { crew: crew })} >
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
    </li>
};