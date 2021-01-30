const config = {
    version: {
        spaceXApi: "v4",
        telemetryApi: "v2",
        newsApi: "v2",
    },
    api: {
        // spaceXApi: "https://api.spacexdata.com",
        spaceXApi: "https://stage.spacexdata.com",
        telemetryApi: "https://api.launchdashboard.space",
        newsApi: "https://spaceflightnewsapi.net"
    },
    mocks: {
        spaceXApi: false,
        telemetryApi: false,
        newsApi: false,
    }
}
export default config;