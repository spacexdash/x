import React from 'react-bootstrap';
import { Card } from 'react-bootstrap';

export const RocketCapacityCard = ({ weights }) => {
    return <Card>
        <Card.Body>
            <div className='row'>
                <div className='col'>
                    Capacity
                </div>
            </div>
            {weights.map((weight) => {
                return <div className='row' key={weight.name}>
                    <div className='col-sm-12 col-md-6'>
                        <small className='text-muted'>{weight.name}</small>
                    </div>
                    <div className='col-sm-12 col-md-6 text-sm-left text-md-right'>
                        <small className='text-muted'>{weight.kg} KG</small>
                    </div>
                </div>
            })}
        </Card.Body>
    </Card>
};