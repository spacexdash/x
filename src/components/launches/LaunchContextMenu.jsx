import React from 'react';
import { Nav } from 'react-bootstrap';
import {
    LAUNCH_PAGE_CONTEXT_MISSION_GALERY,LAUNCH_PAGE_CONTEXT_CREW, LAUNCH_PAGE_CONTEXT_PAYLOAD, LAUNCH_PAGE_CONTEXT_ROCKET, LAUNCH_PAGE_CONTEXT_LAUNCHPAD,
    LAUNCH_PAGE_CONTEXT_SHIPS, LAUNCH_PAGE_CONTEXT_CORES, LAUNCH_PAGE_CONTEXT_LANDINGZONE
} from './LaunchConsts';
const ITEMS = [
    LAUNCH_PAGE_CONTEXT_ROCKET,
    LAUNCH_PAGE_CONTEXT_LAUNCHPAD,
    LAUNCH_PAGE_CONTEXT_CREW,
    LAUNCH_PAGE_CONTEXT_CORES,
    LAUNCH_PAGE_CONTEXT_PAYLOAD,
    LAUNCH_PAGE_CONTEXT_LANDINGZONE,
    LAUNCH_PAGE_CONTEXT_SHIPS,
    LAUNCH_PAGE_CONTEXT_MISSION_GALERY,
];
const ITEM_CONDITIONS = {
    [LAUNCH_PAGE_CONTEXT_MISSION_GALERY]: () => true,
    [LAUNCH_PAGE_CONTEXT_CREW]: (launch) => "crew" in launch && Array.isArray(launch.crew) && launch.crew.length > 0, // needs query changes
    [LAUNCH_PAGE_CONTEXT_ROCKET]: (launch) => "rocket" in launch && typeof launch.rocket === "object",
    [LAUNCH_PAGE_CONTEXT_CORES]: (launch) => "cores" in launch && typeof Array.isArray(launch.cores) && launch.cores.length > 0 && launch.cores[0].core !== null,
    [LAUNCH_PAGE_CONTEXT_PAYLOAD]: (launch) => "payloads" in launch && Array.isArray(launch.payloads) && launch.payloads.length > 0,
    [LAUNCH_PAGE_CONTEXT_LAUNCHPAD]: (launch) => true,
    [LAUNCH_PAGE_CONTEXT_LANDINGZONE]: (launch) => false, // todo needs query changes i think
    [LAUNCH_PAGE_CONTEXT_SHIPS]: (launch) => "ships" in launch && Array.isArray(launch.ships) && launch.ships.length > 0,
};
export const LaunchContextMenu = ({ setActiveContext, activeContext, launch }) => {
    const menuItems = ITEMS.filter((name) => ITEM_CONDITIONS[name](launch)).map((name) => {
        const item = (name === activeContext) ? <u>{name}</u> : name;
        return <Nav.Item key={name} as="li" className=''>
            <Nav.Link onClick={() => setActiveContext(name)}>
                {item}
            </Nav.Link>
        </Nav.Item>
    });
    return <Nav as="ul">
        {menuItems}
    </Nav>
};