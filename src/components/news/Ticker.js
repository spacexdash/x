import React, { useState, useEffect } from 'react';
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import { getSpaceXNews } from '../../service/NewsApi';
const load = (news, setNews) => {
    if (news.hasLoaded || news.isLoading) return;

    return getSpaceXNews()
        .then((d) => setNews({ hasLoaded: true, isLoading: false, error: null, data: d}))
        .catch(e => setNews({ hasLoaded: true, isLoading: false, error: null, data: [ ...news.data ] }));
}

export const NewsTicker = () => {
    const [news, setNews] = useState({ hasLoaded: false, isLoading: false, error: null, data: []});
    useEffect(() => load(news, setNews), [news]);
    const components = news.data.map((d) => {
        return <span style={{ height: '100%'}}>{`${d.title}`}.&nbsp;</span>
    });
    return <Marquee velocity={12}>
        {components}
    </Marquee>
};