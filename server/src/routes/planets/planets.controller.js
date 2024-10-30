const {planets} = require("../../models/planets.model")

function httpgetAllPlanets(req, res){
    return res.status(200).json(planets)
}


module.exports = {
    httpgetAllPlanets,
}