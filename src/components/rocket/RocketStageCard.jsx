import React from 'react';
import { Card } from 'react-bootstrap';

const CARD_LAYOUT = `col-sm-12 col-md-6`;
export const RocketStageCard = ({ stage, stageName }) => {
    const engineLabel = stage.engines > 1 ? 'engines' : 'engine';
    return <Card>
        <Card.Body>
            <div className='row'>
                <div className='col'>
                    {stageName}
                </div>
                <div className='col text-right'>
                    {stage.engines} {engineLabel}
                </div>
            </div>
            <div className='row'>
                <div className={`${CARD_LAYOUT}`}>
                    {stage.thrust_sea_level && <small className='text-muted'>{stage.thrust_sea_level.kN} Kn Thrust at Sea Level</small>}
                </div>
                <div className={`${CARD_LAYOUT} text-sm-left text-md-right`}>
                    {stage.thrust_sea_level && <small className='text-muted'>{stage.thrust_sea_level.lbf} lbf Sea Level</small>}
                </div>
            </div>
            <div className='row'>
                <div className={`${CARD_LAYOUT}`}>
                    {stage.thrust_vacuum && <small className='text-muted'>{stage.thrust_vacuum.kN} Kn Thrust in a Vacuum</small>}
                </div>
                <div className={`${CARD_LAYOUT} text-sm-left text-md-right`}>
                    {stage.thrust_vacuum && <small className='text-muted'>{stage.thrust_vacuum.lbf} lbf Vacuum</small>}
                </div>
            </div>
            <div className='row'>
                <div className={`${CARD_LAYOUT}`}>
                    {stage.thrust && <small className='text-muted'>{stage.thrust.kN} Kn Thrust</small>}
                </div>
                <div className={`${CARD_LAYOUT} text-sm-left text-md-right`}>
                    {stage.thrust && <small className='text-muted'>{stage.thrust.lbf} lbf</small>}
                </div>
            </div>
            <div className='row'>
                <div className={`${CARD_LAYOUT}`}>
                    {stage.burn_time_sec && <small className='text-muted'>{stage.burn_time_sec} Burn Time (s)</small>}
                </div>
                <div className={`${CARD_LAYOUT} text-sm-left text-md-right`}>
                    {stage.fuel_amount_tons && <small className='text-muted'>{stage.fuel_amount_tons} Tons of Fuel</small>}
                </div>
            </div>
        </Card.Body>
    </Card>
}