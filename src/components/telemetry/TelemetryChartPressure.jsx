import React from 'react';
import { Card } from 'react-bootstrap';
import { ResponsiveLine } from '@nivo/line'
import {DEFAULT_CONFIG, MIN_CHART_HEIGHT } from './TelemetryConsts';
import {abbrev} from '../../util/format';

export const TelemetryChartPressure = ({ data }) => {
    const telemetry = data.map((item) => ({ id: `Stage ${item.stage}`, data: item.telemetry.map((tel) => ({ 
        x: tel.time, y: tel.q 
    }))}));
    return <Card className='mb-2'>
        <Card.Body className='p-1'>
        <div className='row'>
            <span className='col ml-3'>Aerodynamic Pressure</span>
        </div>
        <div style={{ height: MIN_CHART_HEIGHT}}>
            <ResponsiveLine
                { ...DEFAULT_CONFIG }
                yFormat={(d) => `Q ${abbrev(d)}`}
                xFormat={(d) => `Time ${d}`}
                axisLeft={{ legend: 'Aero Pressure', format: (d) => abbrev(d) }}
                axisBottom={{ legend: 'Time' }}
                data={telemetry} />
        </div>
    </Card.Body>
    </Card>
};
