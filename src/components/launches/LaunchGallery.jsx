import { React } from 'react';
import { Card } from 'react-bootstrap';
import {
    LAUNCH_PAGE_CONTEXT_MISSION_GALERY,
    LAUNCH_PAGE_CONTEXT_CORES, LAUNCH_PAGE_CONTEXT_ROCKET, LAUNCH_PAGE_CONTEXT_SHIPS, LAUNCH_PAGE_CONTEXT_PAYLOAD
} from './LaunchConsts';

const imagesForContext = (launch,  context) => {
    switch (context) {
        case LAUNCH_PAGE_CONTEXT_MISSION_GALERY:
            return launch.links.flickr.original;
        case LAUNCH_PAGE_CONTEXT_CORES:
            return launch.links.flickr.original;
        case LAUNCH_PAGE_CONTEXT_ROCKET:
            return launch.rocket.flickr_images;
        case LAUNCH_PAGE_CONTEXT_SHIPS:
            return launch.ships.map((ship) => ship.image);
        case LAUNCH_PAGE_CONTEXT_PAYLOAD:
            return launch.links.flickr.original;
        default:
            return [];
    }

};

export const LaunchGallery = ({ launch, context }) => {
    const hrefs = imagesForContext(launch, context);
    if (hrefs.length === 0) return null;

    return <Card>
        <div className='row'>
            {hrefs.map((href) => <img className='col-auto img-fluid img-thumbnail' src={href}/>)}
        </div>
    </Card>
};