import React from 'react';
import { useState, useEffect } from 'react';
import { analysedTelemetry } from '../../service/TelemetryApi';
import {Card, Spinner} from 'react-bootstrap';

import { TelemetryChartAltitude } from './TelemetryChartAltitude';
import { TelemetryChartVelocity } from './TelemetryChartVelocity';
import { TelemetryChartDownrange } from './TelemetryChartDownrange';
import { TelemetryChartPressure } from './TelemetryChartPressure';
import { Loader } from 'react-bootstrap-typeahead';


const load = (id, telemetry, setTelemetry) => {
    if (telemetry.isLoading || telemetry.hasLoaded) return;

    setTelemetry({ ...telemetry, isLoading: true });
    return analysedTelemetry(id)
        .then((res) => {
            if ('error' in res) {
                throw new Error(res.error);
            }
            return res;
        })
        .then((res) => setTelemetry({ hasLoaded: true, isLoading: false, error: null, data: res }))
        .catch((e) => setTelemetry({ ...telemetry, hasLoaded: true, isLoading: false, error: e }))
};

const NoDataComponent = () => <Card>
    <Card.Body>
        <div className='row'><div className='col'>Uh oh, it looks like we don't have any telemetry data for this launch yet 🤔</div></div>
    </Card.Body>
</Card>

export const TelemetryCardStack = ({ id }) => {
    const [telemetry, setTelemetry] = useState({ hasLoaded: false, isLoading: false, error: null, data: {} });
    useEffect(() => load(id, telemetry, setTelemetry), [id]);
    const canRender = (telemetry.hasLoaded && !telemetry.isLoading && !telemetry.error);
    console.log(telemetry)
    return <React.Fragment>
        { canRender && <TelemetryChartAltitude data={telemetry.data} />}
        { canRender && <TelemetryChartVelocity data={telemetry.data} />}
        { canRender && <TelemetryChartDownrange data={telemetry.data} />}
        { canRender && <TelemetryChartPressure data={telemetry.data} />}
        { telemetry.error !== null && <NoDataComponent />}
        { telemetry.isLoading && <Loader /> }
    </React.Fragment>
};