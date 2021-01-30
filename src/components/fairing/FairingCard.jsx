import React from 'react';
import { Card, Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { ordinalSuffix } from '../../util/format';
import { FairingIndicators } from '../launches/LaunchIndicators';

const MoreLaunches = ({ fairing }) => {
    const history = useHistory();
    const launchState = { fairing: fairing };
    return <small>
        <Button variant='link' className='ml-0 pl-0' onClick={() => history.push(`/x/fairing/${fairing.fairing}/launches`, launchState)}>
            <small>More Launches From This Fairing</small>
        </Button>
    </small>
};

const getMsg = (fairing) => {
    const start = (fairing.reused && fairing.flight !== null) ? 
        `This fairing will be attempted to be recovered for the ${ordinalSuffix(fairing.flight)} time during this mission.` : 
        `This is the first time this fairing has been used.`;
    const attemptType = (fairing.water_attempt) ? `recovered from the ocean.` : `caught on the a ship.`
    const attemptMsg = (fairing.water_attempt || fairing.net_attempt) ? 
        `The faring will be attempted to be ${attemptType}` : 
        `This fairing will not be attempting a recovery for this mission.`;
    return `${start} ${attemptMsg}`;
}

export const FairingCard = ({ fairing, index }) => {
    return <Card>
        <Card.Body>
            <div className='row'>
              <div className='col-6 col-md-6'>
                    Fairing {index + 1}
                </div>
                <div className='col-6 text-right'>
                    <FairingIndicators fairings={[fairing]} />
                </div>
                <div className='col-12'>
                    <small>
                        {getMsg(fairing)}
                    </small>
                </div>
                
                {fairing.fairing !== null && fairing.reused && <div className='col'>
                        <MoreLaunches fairing={fairing} />
                </div>}
                {fairing.fairing === null && fairing.reused && <div className='col'>
                    <small> We know this fairing has been re-used but we can't say where </small> 😳
                </div>}
            </div>
        </Card.Body>
    </Card>
}