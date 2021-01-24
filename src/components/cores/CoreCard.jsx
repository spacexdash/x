import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
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
            <small>More Launches From This Core</small>
        </Button>
    </small>
};

const getPreviousLandings = (enhancedCore, field) => {
    const times = (enhancedCore.data[field] === 1) ? `once` : `${enhancedCore.data[field]} times`;
    const prefix = ` This first stage core has`;
    if (field === 'asds_landings') {
        const suffix = `on the automomous spaceport droneship.`;
        if (enhancedCore.data[field] === 0) {
            return ` This first stage has never landed on the ${suffix}`;
        } else {
            return `${prefix} landed ${times} ${suffix}`;
        }
    } else {
        const suffix = `under a return to launch site configuration.`;
        if (enhancedCore.data[field] === 0) {
            return ` This first stage has never landed ${suffix}`;
        } else {
            return `${prefix} landed ${times} ${suffix}`;
        }
    }
}

const getPreviousLaunches = (core) => {
    if (core.flight === 1) {
        return `will make its first flight during this mission.`;
    } else if (core.flight > 1) {
        return `has previously flown ${core.flight} times before this mission.`;
    }
    return null;
};

const getLandingType = (core) => {
    const landingType = (core.landing_attempt !== null) ? core.landing_type : '';
    return (core.landing_attempt !== null) ? ` For this mission, the booster will attempt to land under a ${landingType} configuration.` : ``;
}
export const generateInfo = (core, enhancedCore) => {
    const previousLaunches = getPreviousLaunches(core, enhancedCore);
    const serial = enhancedCore.data.serial;
    const first = (core.flight) === 1;
    const previousLandingAsds = !first ? getPreviousLandings(enhancedCore, 'asds_landings') : '';
    const previousLandingRtls = !first ? getPreviousLandings(enhancedCore, 'rtls_landings') : ''
    const status = enhancedCore.data.status;
    return `Booster ${serial} (block ${enhancedCore.data.block}) ${previousLaunches}${previousLandingAsds}${previousLandingRtls}${getLandingType(core)}`+
    ` The latest status for this booster is: ${status}.`
};
export const CoreCard = ({ core, index }) => {
    const id = core.core;
    const [enhancedCore, setEnhancedCore] = useState({ data: {}, hasLoaded: false, error: null });
    useEffect(() => loadEnhanced({ id, enhancedCore, setEnhancedCore }), [id, enhancedCore]);
    const canDisplayEnhanced = (enhancedCore.hasLoaded && !enhancedCore.error);
    const serial = (canDisplayEnhanced) ? <small className='text-muted'> This core uses the serial number <strong>{enhancedCore.data.serial}</strong></small> : <Loader />;
    const moreLaunches = (canDisplayEnhanced && enhancedCore.data.reuse_count > 0) ? <MoreLaunches enhancedCore={enhancedCore.data} /> : null;
    return <Card>
        <Card.Body>
            <div className='row'>
                <div className='col-6 col-md-6'>
                    Core {index + 1}
                </div>
                <div className='col-6 text-right'>
                    <LandingIndicators cores={[core]} />
                </div>
            </div>
            {canDisplayEnhanced && <div className='row'>
                <div className='col'>
                    <p className='text-muted'><small>{generateInfo(core, enhancedCore)}</small></p>
                </div>
            </div>}
            <div className='row'>
                <div className='col'>
                    {moreLaunches}
                </div>
            </div>
        </Card.Body>
    </Card>
}