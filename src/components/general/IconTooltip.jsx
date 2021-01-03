import React from 'react';
import {Tooltip, OverlayTrigger} from 'react-bootstrap';

const renderTooltip = (props, title) => (
    <Tooltip id="button-tooltip" {...props}> {title}</Tooltip>
);

export const IconTooltip = ({ icon, title }) => {
    return <React.Fragment>
        <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={(props) => renderTooltip(props, title)}
        >
        <i id='icon-tooltip' className={icon}  />
        </OverlayTrigger>
    </React.Fragment>
}