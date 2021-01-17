import { React } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export const CoreSearchResult = ({ core }) => {
    const history = useHistory();

    return <li className={`list-group-item search-result`} onClick={(e) => history.push(`/x/core/${core.id}/launches`, { core: core })} >
        <div className='row'>
            <div className='col'>
                {core.serial}
            </div>
            { core.block !== null && <small className='col text-muted text-right'>
                Block {core.block}
            </small>}
        </div>
        <div className='row'>
            <div className='col'>
                <small className='text-muted'>Reuse count {core.reuse_count}</small>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                {core.asds_landings !== null && core.asds_landings > 0 && <small className='text-muted'>Asds landings {core.asds_landings}</small> }
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                {core.rtls_landings !== null && core.rtls_landings > 0 && <small className='text-muted'>Rtls landings {core.rtls_landings}</small> }
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <small className='text-muted'><strong>Status: </strong>{core.last_update}</small>
            </div>
        </div>
    </li>
}