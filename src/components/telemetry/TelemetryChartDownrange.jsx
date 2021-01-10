import React from 'react';
import { Card } from 'react-bootstrap';
import { ResponsiveLine } from '@nivo/line'
import {DEFAULT_CONFIG, MIN_CHART_HEIGHT } from './TelemetryConsts';
import {abbrev} from '../../util/format';

export const TelemetryChartDownrange = ({ data }) => {
    const telemetry = data.map((item) => ({ id: `Stage ${item.stage}`, data: item.telemetry.map((tel) => ({ 
        x: tel.time, y: tel.downrange_distance
    }))}));
    return <Card className='mb-2'>
        <Card.Body className='p-1'>
        <div className='row'>
            <span className='col ml-3'>Downrange Distance</span>
        </div>
        <div style={{ height: MIN_CHART_HEIGHT }}>
            <ResponsiveLine
                { ...DEFAULT_CONFIG }
                yFormat={(d) => `Downrange ${abbrev(d)} KM`}
                xFormat={(d) => `Time ${d}`}
                axisLeft={{ legend: 'Downrange (KM)', format: (d) => abbrev(d) }}
                axisBottom={{ legend: 'Time' }}
                data={telemetry} />
        </div>
    </Card.Body>
    </Card>
};
