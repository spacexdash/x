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

const handleClick = (history, context) => {
    switch(context) {
        case SEARCH_LAUNCH:
            history.push(`/x/launches/all`);
            break;
        case SEARCH_ROCKET:
            history.push(`/x/rockets/all`);
            break;
        case SEARCH_CORES:
            history.push(`/x/cores/all`);
            break;
        case SEARCH_LAUNCHPAD:
            history.push(`/x/launchpad/all`);
            break;
        case SEARCH_CREW:
            history.push(`/x/crew/all`);
            break;
        case SEARCH_SHIP:
            history.push(`/x/ships/all`);
            break;
        default:
            break;
    }
}
export const ViewAll = (props) => {
    const history = useHistory();

    return <React.Fragment>
        <Button variant='link' onClick={() => handleClick(history, props.context)}>
            View All {props.context}
        </Button>
    </React.Fragment>
}