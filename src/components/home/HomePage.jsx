import React from 'react';
import { LaunchCard } from '../launches/LaunchCard';
import { MainLayout } from '../layout/MainLayout';
import { LAUNCH_DATA_TYPE_PAST, LAUNCH_DATA_TYPE_UPCOMING } from '../launches/LaunchConsts';
import { Search } from '../search/Search';
import { NewsTicker } from '../news/Ticker';

const CARD_LAYOUT = 'col-sm-12 col-md-6 mt-2 mb-2 p-2'
export const HomePage = (props) => {
    return <MainLayout>
        <div className='row mt-3'>
            <div className='col'>
                <Search />
            </div>
        </div>
        <div className='row mt-2'>
            <div className='col'>
                <NewsTicker />
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
    </MainLayout>

};