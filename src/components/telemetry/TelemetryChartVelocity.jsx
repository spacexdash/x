import React from 'react';
import { Card } from 'react-bootstrap';
import { ResponsiveLine } from '@nivo/line'
import {DEFAULT_CONFIG, MIN_CHART_HEIGHT } from './TelemetryConsts';

export const TelemetryChartVelocity = ({ data }) => {
    const telemetry = data.map((item) => ({ id: `Stage ${item.stage}`, data: item.telemetry.map((tel) => ({ 
        x: tel.time, y: tel.velocity 
    }))}));
    return <Card>
        <Card.Body>
        <div style={{ height: MIN_CHART_HEIGHT}}>
            <ResponsiveLine
                { ...DEFAULT_CONFIG }
                yFormat={(d) => `Velocity ${d}`}
                xFormat={(d) => `Time ${d}`}
                axisLeft={{ legend: 'Velocity' }}
                axisBottom={{ legend: 'Time' }}
                data={telemetry} />
        </div>
    </Card.Body>
    </Card>
};
