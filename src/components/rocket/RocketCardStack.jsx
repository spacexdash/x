import React from 'react';
import { RocketEnginesCard } from './RocketEnginesCard';
import { RocketInfoCard } from './RocketInfoCard';
import { RocketStageCard } from './RocketStageCard';
import { RocketCapacityCard } from './RocketCapacityCard';
import { RocketGeometryCard } from './RocketGeometryCard';
export const RocketCardStack = ({ rocket }) => {
    return <React.Fragment>
        <RocketInfoCard rocket={rocket} />
        <RocketStageCard stage={rocket.first_stage} stageName='First Stage'/>
        <RocketStageCard stage={rocket.second_stage} stageName='Second Stage'/>
        <RocketEnginesCard engines={rocket.engines} />
        <RocketCapacityCard weights={rocket.payload_weights} />
        <RocketGeometryCard rocket={rocket} />
    </React.Fragment>
};