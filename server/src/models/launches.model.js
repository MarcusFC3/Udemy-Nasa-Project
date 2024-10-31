const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    launchDate: new Date('October 18, 2038'), 
    mission: "Kepler-442 b",
    rocket: "Explorer 101",
    target: "Kepler-442 b",
    customer: ["Marcus","Someone..."],
    upcoming: true,
    success: true,
}

launches.set(launch.flightNumber, launch)


function getAllLaunches(){
    return Array.from(launches.values())
}

function addNewLaunch(launch){
    latestFlightNumber++;
    launches.set(latestFlightNumber, Object.assign(launch,{
        success: true,
        upcoming: true,
        customers: ["Marky", "NASA"],
        flightNumber: latestFlightNumber,
    }));
    
}

module.exports = {
    launches,
    getAllLaunches,
    addNewLaunch,
};