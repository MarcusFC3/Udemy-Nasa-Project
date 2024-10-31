const {getAllLaunches, addNewLaunch} = require("../../models/launches.model")

function httpgetAllLaunches(req,res){
    return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req,res){
    
    const launch = req.body;
    if (!launch.mission || !launch.launchDate || !launch.target || !launch.rocket){
        return res.status(400).json({
            error: "Failed to add launch. Missing one or more required launch properties."
        })
    }
    launch.launchDate = new Date(launch.launchDate);
    if(launch.launchDate.toString() === "Invalid Date")
    {
        res.status(400).json({
            error: "Invalid launch date"
        });
    }

    addNewLaunch(launch)
    return res.status(200).json(launch)
}

module.exports = {
    httpgetAllLaunches,
    httpAddNewLaunch,
}