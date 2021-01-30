
import React  from 'react';
import { IconTooltip } from '../general/IconTooltip';

export const LandingIndicators = ({ cores }) => {
    return cores.filter((core) => core.landing_attempt && core.landing_success !== null).map((core, index) => {
        return (core.landing_success) ?
            <IconTooltip icon='bi bi-bullseye p-1' key={core.core} title={`Landing Success ${index + 1}`} /> :
            <IconTooltip icon='bi bi-slash-circle p-1' key={core.core} title={`Landing Failure ${index + 1}`} />
    })
};
export const FairingIndicators = ({ fairings }) => {
    if (! fairings) return null;

    return fairings.filter((fairing) => fairing.water_attempt || fairing.net_attempt).map((fairing, index) => {
        const wasDestroyed = (fairing.recovered !== null && !fairing.recovered);
        const stillWaiting = (fairing.recovered === null);
        if (stillWaiting) {
            return null;
        }
        if (wasDestroyed) {
            return <IconTooltip icon='bi bi-slash-circle p-1' title={`Fairings ${index + 1} not Recovered`} />
        }

        if (fairing.net_landing) {
            return <IconTooltip icon='bi bi-droplet-half p-1' title={`Fairing ${index + 1} Caught and Secured`} />
        } 
        
        if (fairing.water_landing) {
            return <IconTooltip icon='bi bi-life-preserver p-1' title={`Fairing ${index + 1} Secured from Ocean`} />

        }
        return null;
    });
}
export const MissionIndicator = ({ success }) => {
    return (success) ?
        <IconTooltip icon='bi bi-check-circle p-1' title={`Mission Success`} /> :
        <IconTooltip icon='bi bi-slash-circle p-1' title={`Mission Failure`} />
}
export const LaunchIndicators = (props) => {
    const { success } = props.launch;
    const { cores, fairings } = props.launch;
    const indicators = [
        <MissionIndicator success={success} key="mission" />,
        <LandingIndicators cores={cores} key="landing" />,
        <FairingIndicators fairings={fairings} key="fairing" />,
    ];
    return <React.Fragment>
        {indicators}
    </React.Fragment>
};