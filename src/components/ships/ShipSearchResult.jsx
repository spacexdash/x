import React from 'react';
import { useHistory } from 'react-router-dom';

export const ShipSearchResult = ({ ship }) => {
    const history = useHistory();

    return <li className={`list-group-item search-result`} onClick={(e) => history.push(`/x/ship/${ship.id}/launches`, { ship: ship })} >
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
                <small>Roles: {ship.roles.join(', ')}</small>
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-12'>
                <small>Home: {ship.home_port}</small>
            </div>
        </div>
    </li>
}