const launches = new Map();

const launch = {
    flightNumber: 100,
    launchDate: new Date('October 18, 2038'), 
    destination: "Kepler-442 b",
    customers : ["Marcus","Someone..."],
    upcoming: true,
    success: true,
}

launches.set(launch.flightNumber, launch)

modules.export = {
    launches,
};