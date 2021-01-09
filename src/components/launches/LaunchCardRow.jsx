import React from 'react';
import { bestDateTime } from '../../util/date';
import { LaunchIndicators } from './LaunchIndicators';
import { useHistory } from 'react-router-dom';

const handlePush = (e, push, id, launch) => {
    if ((e.target.id !== 'icon-tooltip')) {
        push(`/launch/${id}`, { launch: launch });
    }
};

export const LaunchCardRow = (props) => {
    const { id, name, date_utc, date_precision, success, payloads, details } = props.launch;
    const customers = payloads.map(p => p.customers.join(', ')).flat();
    const { push } = useHistory();
    const shouldLock = (details === null || details === "");
    return <li className={`list-group-item launch-card-row`} onClick={(e) => handlePush(e, push, id, props.launch)} >
        <div className='row'>
            <h6 className='col'>
                {name}
            </h6>
            {success !== null && <div className='col text-right'>
                <LaunchIndicators launch={props.launch} />
            </div>}
        </div>
        <div className='row'>
            {customers.length > 0 && <small className='col text-muted'>{customers}</small>}
            <small className='col mr-auto text-right text-muted'>
                {`${bestDateTime({ date_utc, date_precision })}`}
            </small>
        </div>
    </li>
}