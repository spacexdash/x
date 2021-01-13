import React from 'react';

const DISCLAIMER = `We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with ` +
    `Space Exploration Technologies Inc (SpaceX), or any of its subsidiaries or its affiliates. The names SpaceX as well ` +
    `as related names, marks, emblems and images are registered trademarks of their respective owners.`;
export const Disclaimer = () => {
    return <div>
        <p className='text-muted p-2'>
            <small>
                {DISCLAIMER}
                &nbsp;All non-telemetry data gathered here was provided by the community via&nbsp;
                <a href='https://github.com/r-spacex/SpaceX-API' target="_new">r-spacex/SpaceX-API</a>.
                If you think there's inaccurate non-telemetry data or if you have information for an upcoming launch you can raise an issue&nbsp;
                <a href="https://github.com/r-spacex/SpaceX-API/issues" target="_new">here</a>. Launch telemetry is provided by&nbsp;
                <a href="https://github.com/shahar603/Launch-Dashboard-API">Launch-Dashboard-API</a> on a best effort basis. 
                If you have launch telemetry you want to share you can raise an issue&nbsp;
                <a href="https://github.com/shahar603/Launch-Dashboard-API/issues">here</a>. News is provided by&nbsp;
                <a href="https://spaceflightnewsapi.net">snapi</a>.
                For bugs and feature requests you can submit an issue <a href="https://github.com/spacexdash/x/issues" target="_new">here</a>.
            </small>
        </p>
    </div>
}