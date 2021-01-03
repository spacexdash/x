import moment from 'moment';

export const bestDateTime = (opts) => {
    const { date_utc, date_precision } = opts;
    switch(date_precision) {
        case "hour":
            return moment(date_utc).local().format('lll');
        case "day":
            return moment(date_utc).local().format('ll');
        case "month":
            return moment(date_utc).local().format('MMM, YYYY');
        case "quarter": {
            const local = moment(date_utc).local();
            const year = local.format("YYYY");
            const quarter = local.quarter();
            return `Q${quarter} ${year}`;
        }
        case "half": {
            const local = moment(date_utc).local();
            const year = local.format("YYYY");
            const quarter = local.quarter();
            return `Q${quarter}-Q${quarter + 1} ${year}`
        }
        case "year":
            break;
        default:
            return "...";
    }
}