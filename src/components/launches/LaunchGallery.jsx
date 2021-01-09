import { React } from 'react';
import { Card } from 'react-bootstrap';
import {
    LAUNCH_PAGE_CONTEXT_MISSION_GALERY,
    LAUNCH_PAGE_CONTEXT_CORES, LAUNCH_PAGE_CONTEXT_ROCKET, LAUNCH_PAGE_CONTEXT_SHIPS, LAUNCH_PAGE_CONTEXT_PAYLOAD, LAUNCH_PAGE_CONTEXT_CREW
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
        case LAUNCH_PAGE_CONTEXT_CREW:
            return launch.crew.map((crew) => crew.image);
        default:
            return [];
    }

};

export const LaunchGallery = ({ launch, context }) => {
    const hrefs = imagesForContext(launch, context);
    if (hrefs.length === 0) return null;
    return <Card style={{ backgroundColor: 'snow'}}>
        <div className='row m-1'>
            {hrefs.map((href) => <div key={href} className='col-12 text-center p-1'>
                <img src={href} style={{height: 'auto', width: '100%'}} />
            </div>)}
        </div>
    </Card>
};