import React, { useEffect } from 'react';
import { Navbar } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { Disclaimer } from '../disclaimer/Disclaimer';
import {usePrevious} from '../hooks/usePrevious';

export const MainLayout = (props) => {
    const history = useHistory();
    const location = useLocation();
    const previousLocation = usePrevious(location);
    const homeRedirect = (!history) ? null : () => history.push('/x');
    useEffect(() => {
        // override strange react-router scrolling defaults
        if (location !== previousLocation) {
            window.scrollTo(0, 0)
        }
    });
    return <div className='app-main-layout'>
        <Navbar sticky="top" bg='dark' variant='dark' onClick={homeRedirect}>
            <Navbar.Brand>spacexdash/x</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
        <div className='container-fluid bg-light'>
            {props.children}
            <Disclaimer />
        </div>
    </div>
}