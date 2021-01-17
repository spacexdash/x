import { React } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export const RocketSearchResult = ({ rocket }) => {
    const history = useHistory();

    return <li className={`list-group-item search-result`} onClick={(e) => history.push(`/x/rocket/${rocket.id}/launches`, { rocket: rocket })} >
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
    </li>
}