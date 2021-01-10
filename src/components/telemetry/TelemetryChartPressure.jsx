import React from 'react';
import { Card } from 'react-bootstrap';
import { ResponsiveLine } from '@nivo/line'
import {DEFAULT_CONFIG, MIN_CHART_HEIGHT } from './TelemetryConsts';

export const TelemetryChartPressure = ({ data }) => {
    const telemetry = data.map((item) => ({ id: `Stage ${item.stage}`, data: item.telemetry.map((tel) => ({ 
        x: tel.time, y: tel.q 
    }))}));
    return <Card>
        <Card.Body>
        <div style={{ height: MIN_CHART_HEIGHT}}>
            <ResponsiveLine
                { ...DEFAULT_CONFIG }
                yFormat={(d) => `Q ${d}`}
                xFormat={(d) => `Time ${d}`}
                axisLeft={{ legend: 'Aero Pressure' }}
                axisBottom={{ legend: 'Time' }}
                data={telemetry} />
        </div>
    </Card.Body>
    </Card>
};
