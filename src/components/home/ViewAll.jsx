import React from 'react';
import {Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

import {
    SEARCH_CORES,
    SEARCH_LAUNCH,
    SEARCH_SHIP,
    SEARCH_CREW,
    SEARCH_LAUNCHPAD,
    SEARCH_ROCKET
} from '../launches/LaunchConsts';

const supported = {
    [SEARCH_CORES]: false,
    [SEARCH_LAUNCH]: true,
    [SEARCH_SHIP]: false,
    [SEARCH_CREW]: false,
    [SEARCH_LAUNCHPAD]: false,
    [SEARCH_ROCKET]: true,
}
const handleClick = (history, context) => {
    switch(context) {
        case SEARCH_LAUNCH:
            history.push(`/x/launches/all`);
            break;
        case SEARCH_ROCKET:
            history.push(`/x/rockets/all`);
            break;
        default:
            break;
    }
}
export const ViewAll = (props) => {
    const history = useHistory();

    return <React.Fragment>
        {supported[props.context] && <Button variant='link' onClick={() => handleClick(history, props.context)}>
            View All {props.context}
        </Button>}
    </React.Fragment>
}