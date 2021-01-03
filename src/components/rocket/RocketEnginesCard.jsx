import React from 'react';
import { Card } from 'react-bootstrap';
import { titlecase } from '../../util/format';

const CARD_LAYOUT = `col-sm-12 col-md-6`;
export const RocketEnginesCard = ({ engines }) => {
    return <Card>
        <Card.Body>
            <div className='row'>
                <div className='col'>
                    {titlecase(engines.type)} {engines.version} Engine
                </div>
                <div className='col text-right'>
                    {engines.thrust_to_weight} TTW
                </div>
            </div>
            <div className='row'>
                <div className={`${CARD_LAYOUT}`}>
                    <small className='text-muted'>{titlecase(engines.propellant_1)} Propellant</small>
                </div>
                <div className={`${CARD_LAYOUT} text-sm-left text-md-right`}>
                    <small className='text-muted'>{titlecase(engines.propellant_2)} Propellant</small>
                </div>
            </div>
            <div className='row'>
                <div className={`${CARD_LAYOUT}`}>
                    {engines.isp && engines.isp.sea_level !== null && <small className='text-muted'>{engines.isp.sea_level} ISP Sea Level</small>}
                </div>
                <div className={`${CARD_LAYOUT} text-sm-left text-md-right`}>
                    {engines.isp && engines.isp.vacuum !== null && <small className='text-muted'>{engines.isp.vacuum} ISP Vacuum</small>}
                </div>
            </div>
            <div className='row'>
                <div className={`${CARD_LAYOUT}`}>
                    {engines.thrust_sea_level && engines.thrust_sea_level.kN !== null && <small className='text-muted'>{engines.thrust_sea_level.kN} Kn Sea Level</small>}
                </div>
                <div className={`${CARD_LAYOUT} text-sm-left text-md-right`}>
                    {engines.thrust_sea_level && engines.thrust_sea_level.lbf !== null && <small className='text-muted'>{engines.thrust_sea_level.lbf} lbf Sea Level</small>}
                </div>
            </div>
            <div className='row'>
                <div className={`${CARD_LAYOUT}`}>
                    {engines.thrust_vacuum && engines.thrust_vacuum.kN !== null && <small className='text-muted'>{engines.thrust_vacuum.kN} Kn Vacuum</small>}
                </div>
                <div className={`${CARD_LAYOUT} text-sm-left text-md-right`}>
                    {engines.thrust_vacuum && engines.thrust_vacuum.lbf !== null && <small className='text-muted'>{engines.thrust_vacuum.lbf} lbf Vacuum</small>}
                </div>
            </div>
        </Card.Body>
    </Card>
}