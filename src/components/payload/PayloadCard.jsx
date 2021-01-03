import React from 'react';
import { Card } from 'react-bootstrap';

const getRowCol = (payload, field, prefix="", suffix="") => {
    return <div className='row'>
        <div className='col'>
            {payload[field] !== null && <small className='text-muted'>{prefix}: {payload[field]} {suffix}</small>}
        </div>
    </div>
}

const getRowColArr = (payload, field, prefix="", suffix="") => {
    return <div className='row'>
        <div className='col'>
            {payload[field] !== null && payload[field].length > 0 && <small className='text-muted'>{prefix}: {payload[field].join(', ')} {suffix}</small>}
        </div>
    </div>
};
export const PayloadCard = ({ payload }) => {
    return <Card>
        <Card.Body>
            <div className='row'>
                <div className='col'>
                    {payload.name}
                </div>
                <div className='col text-right'>
                    {payload.type !== null && `${payload.type}`}
                </div>
            </div>
            {getRowColArr(payload, 'customers', 'Customers')}
            {getRowColArr(payload, 'manufacturers', 'Manufacturers')}
            {getRowCol(payload, 'lifespan_years', 'Lifespan', 'years')}
            {getRowCol(payload, 'reference_system', 'Reference System')}
            {getRowCol(payload, 'regime', 'Regime')}
            {getRowCol(payload, 'orbit', 'Orbit')}
            {getRowCol(payload, 'mass_kg', 'Mass', 'KG')}
            {getRowCol(payload, 'apoapsis_km', 'Apoapsis', 'KM')}
            {getRowCol(payload, 'arg_of_pericenter', 'Arg. Pericenter')}
            {getRowCol(payload, 'semi_major_axis_km', 'Semi Major Axis', 'KM')}
            {getRowCol(payload, 'periapsis_km', 'Periapsis', 'KM')}
            {getRowCol(payload, 'period_min', 'Period Min')}
            {getRowCol(payload, 'raan', 'RAAN')}
            {getRowCol(payload, 'eccentricity', 'Eccentricity')}
            {getRowCol(payload, 'inclination_deg', 'Inclination', 'Degrees')}
            {getRowCol(payload, 'mean_anomaly', 'Avg. Anomaly')}
            {getRowCol(payload, 'mean_motion', 'Avg. Motion')}
            {getRowColArr(payload, 'norad_ids', 'Norad IDs')}
        </Card.Body>
    </Card>
};