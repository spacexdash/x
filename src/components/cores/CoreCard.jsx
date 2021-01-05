import React, { useState, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { Card, Button} from 'react-bootstrap';
import { Loader } from 'react-bootstrap-typeahead';
import { getCore } from '../../service/SpaceXApi';
import { LandingIndicators } from '../launches/LaunchIndicators';
import { ordinalSuffix } from '../../util/format';

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
        <Button variant='link' className='ml-0 pl-0' onClick={() => history.push(`/x/core/${enhancedCore.id}/launches`, launchState)}>
            <small>More Launches from This Core</small>
        </Button>
    </small>
};

const getPreviousLandings = (enhancedCore, field) => {
    const times = (enhancedCore.data[field] === 1) ? `once` : `${enhancedCore.data[field]} times`;
    const prefix = `This first stage core has`;
    if (field === 'asds_landings') {
        const suffix = `on the automomous spaceport droneship`;
        if (enhancedCore.data[field] === 0) {
            return `This first stage has never landed on the ${suffix}`;
        } else {
            return `${prefix} landed ${times} ${suffix}`;
        }
    } else {
        const suffix = `under a return to launch site configuration`;
        if (enhancedCore.data[field] === 0) {
            return `This first has never landed ${suffix}`;
        } else {
            return `${prefix} landed ${times} ${suffix}`;
        }
    }
}

const getPreviousLaunches = (core) => {
    
    if (core.flight === 1) {
        return `This launch was the first time this core was used`;
    } else if (core.flight > 1) {
        return `This launch was the ${ordinalSuffix(core.flight)} flight for this core`;
    }
    return null;
};
export const CoreCard = ({ core, index }) => {
    const id = core.core;
    const [enhancedCore, setEnhancedCore] = useState({ data: {}, hasLoaded: false, error: null });
    useEffect(() => loadEnhanced({ id, enhancedCore, setEnhancedCore }));
    const canDisplayEnhanced = (enhancedCore.hasLoaded && !enhancedCore.error);
    const serial = (canDisplayEnhanced) ? <small className='text-muted'> This core uses the serial number <strong>{enhancedCore.data.serial}</strong></small> : <Loader />;
    const moreLaunches = (canDisplayEnhanced && core.flight > 1) ? <MoreLaunches enhancedCore={enhancedCore.data} /> : null;
    console.log('Enhanced Core', enhancedCore.data);
    return <Card>
        <Card.Body>
            <div className='row'>
                <div className='col-sm-12 col-md-6'>
                    Core {index + 1}
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
                    <small className='text-muted'>{getPreviousLaunches(core)}</small>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    {serial}
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                { canDisplayEnhanced && core.flight > 1 && <small className='text-muted'>{getPreviousLandings(enhancedCore, 'rtls_landings')}</small> }
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                   { canDisplayEnhanced && core.flight > 1 && <small className='text-muted'>{getPreviousLandings(enhancedCore, 'asds_landings')}</small> }
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