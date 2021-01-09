import React from 'react';
import { Nav } from 'react-bootstrap';
import { IconTooltip } from '../general/IconTooltip';
import { titlecase } from '../../util/format.js';

const LINK_ICONS = {
    'webcast': 'bi bi-youtube',
    'presskit': 'bi bi-info-circle-fill',
    'article': 'bi bi-newspaper',
    'wikipedia': 'bi bi-book-half',
    'reddit': 'bi bi-chat-right-quote-fill'
};
const getUrl = (type, links) => {
    if (type === 'reddit') {
        return 'launch' in links[type] ? links[type]['launch'] : `https://reddit.com/r/spacex`;
    } else {
        return links[type]
    }
}
export const LaunchLinkBar = ({ links }) => {
    const navItems = Object.keys(links).filter((type) => type in LINK_ICONS && links[type] !== null).sort().map((type)=> {
        return <Nav.Item as="li" onClick={() => window.open(getUrl(type, links))} key={type}>
            <IconTooltip title={titlecase(type)} icon={`${LINK_ICONS[type]} p-2`} />
        </Nav.Item>
    });
    return <Nav as="ul">
        {navItems}
    </Nav>
};