import React from 'react';
import { LaunchCard } from '../launches/LaunchCard';
import { MainLayout } from '../layout/MainLayout';
import { LAUNCH_DATA_TYPE_PAST, LAUNCH_DATA_TYPE_UPCOMING } from '../launches/LaunchConsts';
import { Search } from '../search/Search';

const CARD_LAYOUT = 'col-sm-12 col-md-6 mt-2 mb-2 p-2'
const DISCLAIMER = `We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with ` +
    `Space Exploration Technologies Inc (SpaceX), or any of its subsidiaries or its affiliates. The names SpaceX as well ` +
    `as related names, marks, emblems and images are registered trademarks of their respective owners.`;
const Disclaimer = () => {
    return <div>
        <p className='text-muted'>
            <small>
                {DISCLAIMER}
                All data gathered here was provided by the community via&nbsp;
                <a href='https://github.com/r-spacex/SpaceX-API' target="_new">r-spacex/SpaceX-API</a>.
                If you think there's inaccurate data or if you have information for an upcoming launch you can raise an issue&nbsp;
                <a href="https://github.com/r-spacex/SpaceX-API/issues" target="_new">here</a>.
                For bugs and feature requests you can submit requests <a href="https://github.com/spacexdash/x/issues" target="_new">here</a>
            </small>
        </p>
    </div>
}
export const HomePage = (props) => {
    return <MainLayout>
        <div className='row mt-3'>
            <div className='col'>
                <Search />
            </div>
        </div>
        <div className='row'>
            <div className={CARD_LAYOUT}>
                <LaunchCard type={LAUNCH_DATA_TYPE_UPCOMING} />
            </div>
            <div className={CARD_LAYOUT}>
                <LaunchCard type={LAUNCH_DATA_TYPE_PAST} />
            </div>
        </div>
        <Disclaimer />
    </MainLayout>

};