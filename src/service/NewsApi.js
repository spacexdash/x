import config from '../config/config';
import { runApi } from "./serviceUtil";
const domain = `${config.api.newsApi}/api/${config.version.newsApi}`;

export const getSpaceXNews = () => {
    const fn = () => fetch(`${domain}/articles?title_contains=spacex&_limit=5`).then(r => r.json());
    return wrapFetch(fn, "articles_spacex");
};

export const wrapFetch = (fn, identifier) => runApi(fn, "newsApi", identifier);