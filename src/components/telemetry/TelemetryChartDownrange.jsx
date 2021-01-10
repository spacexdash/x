import React from 'react';
import { Card } from 'react-bootstrap';
import { ResponsiveLine } from '@nivo/line'
import {DEFAULT_CONFIG, MIN_CHART_HEIGHT } from './TelemetryConsts';

export const TelemetryChartDownrange = ({ data }) => {
    const telemetry = data.map((item) => ({ id: `Stage ${item.stage}`, data: item.telemetry.map((tel) => ({ 
        x: tel.time, y: tel.downrange_distance
    }))}));
    return <Card>
        <Card.Body>
        <div style={{ height: MIN_CHART_HEIGHT }}>
            <ResponsiveLine
                { ...DEFAULT_CONFIG }
                yFormat={(d) => `Downrange ${d} KM`}
                xFormat={(d) => `Time ${d}`}
                axisLeft={{ legend: 'Downrange (KM)' }}
                axisBottom={{ legend: 'Time' }}
                data={telemetry} />
        </div>
    </Card.Body>
    </Card>
};
