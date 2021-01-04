import React from 'react';
import { Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export const MainLayout = (props) => {
    const history = useHistory();
    const homeRedirect = (!history) ? null : () => history.push('/x');

    return <div className='app-main-layout'>
        <Navbar sticky="top" bg='dark' variant='dark' onClick={homeRedirect}>
            <Navbar.Brand>spacexdash/x</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>

        <div className='container-fluid bg-light'>
            {props.children}
        </div>
    </div>
}