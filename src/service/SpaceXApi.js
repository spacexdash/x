import config from '../config/config';
import { runApi } from "./serviceUtil";
const domain = `${config.api.spaceXApi}/${config.version.spaceXApi}`;
const defaultQueryHeaders = { 'Content-Type': 'application/json' }
const defaultPostConfiguration = { method: 'POST', headers: defaultQueryHeaders };
const defaultLaunchQuery = {
    query: {},
    options: { populate: ["payloads", "rocket", "landpad", "ships"], sort: { flight_number: "desc" }, limit: 7 }
}

export const getPastLaunches = () => {
    const payload = { ...defaultLaunchQuery, query: { ...defaultLaunchQuery.query, upcoming: false } };
    const fn = () => fetch(`${domain}/launches/query`, { ...defaultPostConfiguration, body: JSON.stringify(payload) }).then(r => r.json());
    return wrapFetch(fn, "launches_past");
}
export const getUpcomingLaunches = () => {
    const payload = {
        ...defaultLaunchQuery,
        query: { ...defaultLaunchQuery.query, upcoming: true },
        options: { ...defaultLaunchQuery.options, sort: { flight_number: "asc" } }
    };
    const fn = () => fetch(`${domain}/launches/query`, { ...defaultPostConfiguration, body: JSON.stringify(payload) }).then(r => r.json());
    return wrapFetch(fn, "launches_upcoming");
}

export const getLaunch = (id) => {
    const payload = { ...defaultLaunchQuery, query: { ...defaultLaunchQuery.query, _id: id } };
    const fn = () => fetch(`${domain}/launches/query`, { ...defaultPostConfiguration, body: JSON.stringify(payload) }).then(r => r.json());
    return wrapFetch(fn, "launches_one").then((data) => data.docs[0]);
}

export const searchLaunches = (term) => {
    const payload = { ...defaultLaunchQuery, query: { ...defaultLaunchQuery.query, "$text": { "$search": term }}};
    const fn = () => fetch(`${domain}/launches/query`, { ...defaultPostConfiguration, body: JSON.stringify(payload) }).then(r => r.json());
    return wrapFetch(fn, "launches_search");
};

export const getCore = (id) => {
    const fn = () => fetch(`${domain}/cores/${id}`).then((r) => r.json());
    return wrapFetch(fn, "core_one");
}

export const getShip = (id) => {
    const fn = () => fetch(`${domain}/ships/${id}`).then((r) => r.json());
    return wrapFetch(fn, "ship_one");
}

export const getLaunches = (ids) => {
    const payload = { ...defaultLaunchQuery, query: { ...defaultLaunchQuery.query, "_id": { "$in": ids }}};
    const fn = () => fetch(`${domain}/launches/query`, { ...defaultPostConfiguration, body: JSON.stringify(payload) }).then(r => r.json());
    return wrapFetch(fn, "launches_past");
}
export const wrapFetch = (fn, identifier) => runApi(fn, "spaceXApi", identifier);