import config from '../config/config';
import { runApi } from "./serviceUtil";
const domain = `${config.api.spaceXApi}/${config.version.spaceXApi}`;
const defaultQueryHeaders = { 'Content-Type': 'application/json' }
const defaultPostConfiguration = { method: 'POST', headers: defaultQueryHeaders };
const defaultLaunchQuery = {
    query: {},
    options: { populate: ["payloads", "rocket", "landpad", "launchpad", "ships", "crew"], sort: { flight_number: "desc" }, limit: 30 }
}

export const getPastLaunches = (page = 1, limit = defaultLaunchQuery.options.limit) => {
    const payload = { 
        ...defaultLaunchQuery, 
        query: { ...defaultLaunchQuery.query, upcoming: false },
        options: { ...defaultLaunchQuery.options, limit: limit, page: page }
    };
    const fn = () => fetch(`${domain}/launches/query`, { ...defaultPostConfiguration, body: JSON.stringify(payload) }).then(r => r.json());
    return wrapFetch(fn, "launches_past");
}
export const getUpcomingLaunches = (page = 1, limit = defaultLaunchQuery.options.limit) => {
    const payload = {
        ...defaultLaunchQuery,
        query: { ...defaultLaunchQuery.query, upcoming: true },
        options: { ...defaultLaunchQuery.options, limit: limit, sort: { flight_number: "asc" }, page: page  }
    };
    const fn = () => fetch(`${domain}/launches/query`, { ...defaultPostConfiguration, body: JSON.stringify(payload) }).then(r => r.json());
    return wrapFetch(fn, "launches_upcoming");
}

export const getLaunchesByRocket = (id, page = 1, limit = defaultLaunchQuery.options.limit) => {
    const payload = { 
        ...defaultLaunchQuery, 
        query: { ...defaultLaunchQuery.query, upcoming: false, "rocket": { "_id" : id } },
        options: { ...defaultLaunchQuery.options, limit: limit, page: page }
    };
    const fn = () => fetch(`${domain}/launches/query`, { ...defaultPostConfiguration, body: JSON.stringify(payload) }).then(r => r.json());
    return wrapFetch(fn, "launches_upcoming");   
}

export const getLaunches = (ids, page=1) => {
    const payload = { 
        ...defaultLaunchQuery,
        query: { ...defaultLaunchQuery.query, "_id": { "$in": ids }},
        options: { ...defaultLaunchQuery.options, page: page }
    };
    const fn = () => fetch(`${domain}/launches/query`, { ...defaultPostConfiguration, body: JSON.stringify(payload) }).then(r => r.json());
    return fn();
    // return wrapFetch(fn, "launches_past");
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

export const searchCores = (term) => {
    const payload = { "query": { "serial": { "$regex": term, "$options": "si" } } };
    const fn = () => fetch(`${domain}/cores/query`, { ...defaultPostConfiguration, body: JSON.stringify(payload) }).then(r => r.json());
    return wrapFetch(fn, "core_search");
};

export const searchShip = (term) => {
    const regex = { "$regex": term, "$options": "si" };
    const payload = { "query": { "$or": [ { "name": regex }, { "legacy_id": regex }, { "model": regex }, { "type": regex } , { "home_port": regex } ] } };
    const fn = () => fetch(`${domain}/ships/query`, { ...defaultPostConfiguration, body: JSON.stringify(payload) }).then(r => r.json());
    return wrapFetch(fn, "ship_search");
}

export const searchCrew = (term) => {
    const regex = { "$regex": term, "$options": "si" };
    const payload = { "query": { "$or": [ { "name": regex }, { "agency": regex } ] } };
    const fn = () => fetch(`${domain}/crew/query`, { ...defaultPostConfiguration, body: JSON.stringify(payload) }).then(r => r.json());
    return wrapFetch(fn, "crew_search");
}

export const searchLaunchpad = (term) => {
    const regex = { "$regex": term, "$options": "si" };
    const payload = { "query": { "$or": [ { "name": regex }, { "full_name": regex } ] } };
    const fn = () => fetch(`${domain}/launchpads/query`, { ...defaultPostConfiguration, body: JSON.stringify(payload) }).then(r => r.json());
    return wrapFetch(fn, "launchpad_search");
}

export const searchRockets = (term) => {
    const regex = { "$regex": term, "$options": "si" };
    const payload = { "query": { "$or": [ { "name": regex }, { "description": regex } ] } };
    const fn = () => fetch(`${domain}/rockets/query`, { ...defaultPostConfiguration, body: JSON.stringify(payload) }).then(r => r.json());
    return wrapFetch(fn, "rocket_search");
}

export const getCore = (id) => {
    const fn = () => fetch(`${domain}/cores/${id}`).then((r) => r.json());
    return wrapFetch(fn, "core_one");
}

export const getShip = (id) => {
    const fn = () => fetch(`${domain}/ships/${id}`).then((r) => r.json());
    return wrapFetch(fn, "ship_one");
}

export const getCrew = (id) => {
    const fn = () => fetch(`${domain}/crew/${id}`).then((r) => r.json());
    return wrapFetch(fn, "crew_one");
};

export const getLaunchpad = (id) => {
    const fn = () => fetch(`${domain}/launchpads/${id}`).then((r) => r.json());
    return wrapFetch(fn, "launchpad_one");
};

export const getRockets = (ids) => {
    const payload = { query: { "_id": { "$in": ids }}};
    const fn = () => fetch(`${domain}/rockets/query`, { ...defaultPostConfiguration, body: JSON.stringify(payload) }).then(r => r.json());
    return wrapFetch(fn, "rocket_search");
}

export const wrapFetch = (fn, identifier) => runApi(fn, "spaceXApi", identifier);