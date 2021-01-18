import { React } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export const LaunchpadSearchResult = ({ launchpad }) => {
    const history = useHistory();

    return <li className={`list-group-item search-result`} onClick={(e) => history.push(`/x/launchpad/${launchpad.id}/launches`, { launchpad: launchpad })} >
        <div className='row'>
            <div className='col'>
                {launchpad.name}
            </div>
            <div className='col text-right'>
                {launchpad.region}
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <small className='text-muted'>{launchpad.full_name}</small>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <small className='text-muted'><p>{launchpad.details}</p></small>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <small className='text-muted'>Latitude: {launchpad.latitude}</small>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <small className='text-muted'>Longitude: {launchpad.longitude}</small>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <small className='text-muted'>Status: <strong>{launchpad.status}</strong></small>
            </div>
        </div>
    </li>
}