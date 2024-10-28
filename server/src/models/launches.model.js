const launches = new Map();

const launch = {
    flightNumber: 100,
    launchDate: new Date('October 18, 2038'), 
    mission: "Kepler-442 b",
    rocket: "Explorer 101",
    destination: "Kepler-442 b",
    customer: ["Marcus","Someone..."],
    upcoming: true,
    success: true,
}

launches.set(launch.flightNumber, launch)

module.exports = {
    launches,
};