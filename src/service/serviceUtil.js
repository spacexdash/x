import config from '../config/config';

export const runApi = (fn, service, identifier) => (config.mocks[service]) ? fetch(buildMockPath(service, identifier)).then((r) => r.json()) : fn();
const buildMockPath = (service, identifier) => `/mocks/${service}/${config.version[service].toUpperCase()}_${identifier}.json`;