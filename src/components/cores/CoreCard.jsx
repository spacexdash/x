import React, { useState, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { Card, Button} from 'react-bootstrap';
import { Loader } from 'react-bootstrap-typeahead';
import { getCore } from '../../service/SpaceXApi';
import { LandingIndicators } from '../launches/LaunchIndicators';

const loadEnhanced = ({ id, enhancedCore, setEnhancedCore }) => {
    if (enhancedCore.hasLoaded) return null;
    return getCore(id)
        .then((d) => setEnhancedCore({ hasLoaded: true, data: d, error: null }))
        .catch((e) => setEnhancedCore({ data: {}, hasLoaded: true, error: e }));
};

const MoreLaunches = ({ enhancedCore, serial }) => {
    const history = useHistory();
    const launchState = { core: enhancedCore };
    return <small>
        <a onClick={() => history.push(`/x/core/${enhancedCore.id}/launches`, launchState)}>
            Launches Containing This Core
        </a>
    </small>
};
export const CoreCard = ({ core, index }) => {
    const id = core.core;
    const [enhancedCore, setEnhancedCore] = useState({ data: {}, hasLoaded: false, error: null });
    useEffect(() => loadEnhanced({ id, enhancedCore, setEnhancedCore }));
    const canDisplayEnhanced = (enhancedCore.hasLoaded && !enhancedCore.error);
    const serial = (canDisplayEnhanced) ? <small className='text-muted'>Serial: {enhancedCore.data.serial}</small> : <Loader />;
    const moreLaunches = (canDisplayEnhanced && core.flight > 1) ? <MoreLaunches enhancedCore={enhancedCore.data} /> : null;

    return <Card>
        <Card.Body>
            <div className='row'>
                <div className='col-sm-12 col-md-6'>
                    Booster {index + 1}
                </div>
                <div className='col-sm-12 col-md-6 text-sm-left text-md-right'>
                    <LandingIndicators cores={[core]} />
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <small className='text-muted'>Landing Type: {core.landing_attempt && core.landing_attempt !== null &&  core.landing_type}</small>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <small className='text-muted'>Flights: {core.flight}</small>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    {serial}
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                   { canDisplayEnhanced && core.flight > 1 && <small className='text-muted'>
                       This booster has preivously landed {enhancedCore.data.rtls_landings} times under return to launch site configuration.</small>}
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                   { canDisplayEnhanced && core.flight > 1 && <small className='text-muted'>
                       This booster has preivously landed {enhancedCore.data.asds_landings} times on an automous spaceport droneship.</small>}
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    {moreLaunches}
                </div>
            </div>
        </Card.Body>
    </Card>
}