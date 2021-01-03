
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
    if (fairings && fairings.recovery_attempt && fairings.recovered !== null) {
        return (fairings.recovered) ?
            <IconTooltip icon='bi bi-life-preserver p-1' title={`Fairings Recovered`} /> :
            <IconTooltip icon='bi bi-slash-circle p-1' title={`Fairings not Recovered`} />
    }
    return null;
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