import config from '../config/config';
import { runApi } from "./serviceUtil";

const domain = `${config.api.telemetryApi}/${config.version.telemetryApi}`;

export const analysedTelemetry = (id) => {
    const fn = () => fetch(`${domain}/analysed/spacex/?flight_number=${id}`).then((r) => r.json());
    return wrapFetch(fn, "analysed_telemetry")
};

export const wrapFetch = (fn, identifier) => runApi(fn, "telemetryApi", identifier);