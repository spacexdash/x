import React, { useEffect, useState } from 'react';
import { MainLayout } from '../layout/MainLayout';
import { getLaunch } from '../../service/SpaceXApi';
import { Card } from 'react-bootstrap';
import { LaunchIndicators } from '../launches/LaunchIndicators';
import { LaunchLinkBar } from '../launches/LaunchLinkBar';
import { useLocation, useParams } from 'react-router-dom';
import { LaunchContextMenu } from './LaunchContextMenu';
import {
    LAUNCH_PAGE_CONTEXT_MISSION_GALERY, LAUNCH_PAGE_CONTEXT_CORES,
    LAUNCH_PAGE_CONTEXT_ROCKET, LAUNCH_PAGE_CONTEXT_SHIPS, LAUNCH_PAGE_CONTEXT_PAYLOAD, LAUNCH_PAGE_CONTEXT_CREW, LAUNCH_PAGE_CONTEXT_LAUNCHPAD
} from './LaunchConsts';
import { CoreCard } from '../cores/CoreCard';
import { RocketCardStack } from '../rocket/RocketCardStack';
import { ShipCard } from '../ships/ShipCard';
import { PayloadCard } from '../payload/PayloadCard';
import { LaunchGallery } from './LaunchGallery';
import { CrewCard } from '../crew/CrewCard';
import { LaunchpadCard } from '../launchpad/LaunchpadCard';

const loadPage = ({ fetchedLaunch, setFetchedLaunch, launchId }) => {
    if (fetchedLaunch.loaded) {
        return
    }
    console.log('Using the network to load...');
    return getLaunch(launchId).then((d) => {
        setFetchedLaunch({ loaded: true, data: d, error: null });
    })
        .catch((e) => {
            console.error(e);
            setFetchedLaunch({ loaded: false, error: e, data: {} })
        })
}

const existsInLocationState = (location) => location && location.state && location.state.launch;

const ContextCoreComponent = ({ launch }) => launch.cores.map((core, index) => <CoreCard key={core.core} core={core} index={index} />);
const ContextRocketComponent = ({ launch }) => <RocketCardStack rocket={launch.rocket} />
const ContextShipComponent = ({ launch }) => launch.ships.map((ship) => <ShipCard key={ship.id} ship={ship} />);
const ContextPayloadComponent = ({ launch }) => launch.payloads.map((payload) => <PayloadCard key={payload.id} payload={payload} />);
const ContextCrewComponent = ({ launch }) => launch.crew.map((crew) => <CrewCard key={crew.id} crew={crew} />);
const ContextLaunchpadComponent = ({ launch }) => <LaunchpadCard launchpad={launch.launchpad} />

export const componentForContext = (type, launch) => {
    switch (type) {
        case LAUNCH_PAGE_CONTEXT_MISSION_GALERY:
            return null;
        case LAUNCH_PAGE_CONTEXT_CORES:
            return <ContextCoreComponent launch={launch} />
        case LAUNCH_PAGE_CONTEXT_ROCKET:
            return <ContextRocketComponent launch={launch} />
        case LAUNCH_PAGE_CONTEXT_SHIPS:
            return <ContextShipComponent launch={launch} />
        case LAUNCH_PAGE_CONTEXT_PAYLOAD:
            return <ContextPayloadComponent launch={launch} />
        case LAUNCH_PAGE_CONTEXT_CREW:
            return <ContextCrewComponent launch={launch} />
        case LAUNCH_PAGE_CONTEXT_LAUNCHPAD:
            return <ContextLaunchpadComponent launch={launch} />
        default:
            return <span>This context item is not implemented</span>
    }
};

export const LaunchPage = () => {
    const { launchId } = useParams();
    const location = useLocation();
    const [fetchedLaunch, setFetchedLaunch] = useState({
        loaded: existsInLocationState(location),
        error: null,
        data: {}
    });
    const [activeContext, setActiveContext] = useState(LAUNCH_PAGE_CONTEXT_ROCKET)
    const launch = (existsInLocationState(location)) ? location.state.launch : fetchedLaunch.data;
    const shouldRender = (fetchedLaunch.loaded && !fetchedLaunch.error);
    const displayMissionPatch = (shouldRender && launch.links.patch.small !== null);
    const colBody = (displayMissionPatch) ? 'col-sm-12 col-md-9' : 'col-12'
    const detials = (launch.details !== null) ? launch.details :
        <span className='text-muted'>We do not have enough details to provide more mission details right now.
        Check back later for more information.</span>
    useEffect(() => loadPage({ fetchedLaunch, setFetchedLaunch, launchId }), [fetchedLaunch, launchId]);
    console.log('Active launch', launch);
    return <MainLayout>
        <Card className='mt-3'>
            <Card.Body>
                <div className='row'>
                    {displayMissionPatch && <div className='col-12 d-md-none text-center'>
                        <img style={{ height: '120px' }} src={launch.links.patch.small} alt='mission-patch'/>
                    </div>}
                    <div className={colBody}>
                        <div className='row'>
                            {shouldRender && <Card.Title className='col-auto'>{launch.name}</Card.Title>}
                            {shouldRender && !launch.upcoming && <div className='col-auto ml-auto text-left'><LaunchIndicators launch={launch} /></div>}
                        </div>
                        <div className='row'>
                            {shouldRender && <span className=' col'>{detials}</span>}
                        </div>
                    </div>
                    {displayMissionPatch && <div className='col-md-3 d-none d-md-block text-right'>
                        <img style={{ height: '150px' }} src={launch.links.patch.small} alt='mission-patch'/>
                    </div>}
                </div>
                <div className='row pt-2 '>
                    <div className='col'>
                        {shouldRender && <LaunchLinkBar links={launch.links} />}
                    </div>
                </div>
            </Card.Body>
        </Card>

        <Card className='mt-2 mb-2'>
            <Card.Body>
                {shouldRender && <LaunchContextMenu launch={launch} activeContext={activeContext} setActiveContext={setActiveContext} />}
            </Card.Body>
        </Card>

        {shouldRender && componentForContext(activeContext, launch)}
        {shouldRender && <LaunchGallery launch={launch} context={activeContext} />}
    </MainLayout>
};