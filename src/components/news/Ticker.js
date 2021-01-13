import React, { useState, useEffect } from 'react';
import Marquee from "react-marquee-slider";
import { getSpaceXNews } from '../../service/NewsApi';
import moment from 'moment';

const load = (news, setNews) => {
    if (news.hasLoaded || news.isLoading) return;

    return getSpaceXNews()
        .then((d) => setNews({ hasLoaded: true, isLoading: false, error: null, data: d}))
        .catch(e => setNews({ hasLoaded: true, isLoading: false, error: null, data: [ ...news.data ] }));
}

export const NewsTicker = () => {
    const [news, setNews] = useState({ hasLoaded: false, isLoading: false, error: null, data: []});
    useEffect(() => load(news, setNews), [news]);
    console.log(news);
    const components = news.data.map((d) => {
        return <span style={{ height: '100%'}} key={d.id}>{`${d.title} (${moment(d.publishedAt).format("l")})`}.&nbsp;</span>
    });
    return <Marquee velocity={12}>
        {components}
    </Marquee>
};